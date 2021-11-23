import {AppProvider, Heading, Layout, Page, ResourceList, TextStyle, Thumbnail} from "@shopify/polaris";
import {useEffect, useState} from "react";
import {ScheduledEventCard} from "../component/scheduled-event-card";
import {FinishedEventCardProps, LiveEventCardProps, ScheduledEventCardProps} from "../interface/event-card.props";
import {LiveStatus} from "../entities/live-event.entity";
import {LiveEventCard} from "../component/live-event-card";
import {FinishedEventCard} from "../component/finished-event-card";
import {useHistory} from "react-router-dom";
import {Product} from "../entities/product.entity";
import { httpClient } from "../client/http-client";
export function LiveEventDashboard() {
    const history = useHistory();
    //sample data
    // const sampleScheduledEventCardProps: ScheduledEventCardProps = {
    //     event: {
    //         id: '1',
    //         title: '스카프 20% 할인 예정',
    //         status: LiveStatus.SCHEDULED,
    //         productIds: ['1', '2']
    //     },
    //     products: [
    //         {
    //             id: '1',
    //             name: 'Black & orange scarf',
    //             thumbnail: 'https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg',
    //             price: 10000
    //         },
    //         {
    //             id: '2',
    //             name: 'Tucan scarf',
    //             thumbnail: 'https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg',
    //             price: 20000
    //         }
    //     ],
    //     onDeleteAction: () => {
    //         alert('이벤트가 삭제되어야 합니다.')
    //     },
    //     onLiveEventAction: (id) => {
    //         // sampleLiveEventCardPropsList.push(sampleScheduledEventCardProps);
    //         alert('방송 중인 이벤트로 이동되어야 합니다.')
    //     }
    // }
    // const sampleLiveEventCardProps: LiveEventCardProps = {
    //     event: {
    //         id: '2',
    //         title: '스카프 20% 할인 - 진행중',
    //         status: LiveStatus.LIVE,
    //         productIds: ['1', '2']
    //     },
    //     products: [
    //         {
    //             id: '1',
    //             name: 'Black & orange scarf',
    //             thumbnail: 'https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg',
    //             price: 10000
    //         },
    //         {
    //             id: '2',
    //             name: 'Tucan scarf',
    //             thumbnail: 'https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg',
    //             price: 20000
    //         }
    //     ],
    //     onDeleteAction: () => {
    //         alert('이벤트가 삭제되어야 합니다.')
    //     },
    //     onFinishedEventAction: () => {
    //         alert('방송 종료된 이벤트로 이동되어야 합니다.')
    //     },
    // }
    // const sampleFinishedEventCardProps: FinishedEventCardProps = {
    //     event: {
    //         id: '3',
    //         title: '스카프 20% 할인 - 진행중',
    //         status: LiveStatus.FINISHED,
    //         productIds: ['1', '2']
    //     },
    //     products: [
    //         {
    //             id: '1',
    //             name: 'Black & orange scarf',
    //             thumbnail: 'https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg',
    //             price: 10000
    //         },
    //         {
    //             id: '2',
    //             name: 'Tucan scarf',
    //             thumbnail: 'https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg',
    //             price: 20000
    //         }
    //     ],
    //     onDeleteAction: () => {
    //         alert('이벤트가 삭제되어야 합니다.')
    //     },
    // }
    const [sampleScheduledEventCardPropsList, setScheduledEventList] = useState<[]>([]);
    const [sampleLiveEventCardPropsList, setLiveEventList] = useState<[]>([]);
    const [sampleFinishedEventCardPropsList, setFinishedEventList] = useState<[]>([]);
    const [eventList, setEventList] = useState<[]>([]);
    let list, product: any;
    async function getData() {
        list = await httpClient.getEventList();
        setEventList(list.liveEvents);
        product = await httpClient.getProductList();
        let scheduledEventList: any = [];
        let liveEventList: any = [];
        let finishedEventList: any = [];
        let eventObj;
        list.liveEvents.forEach((event: any) => {
            const products = event.productIds.map((item: string) => product.products[+item - 1])
            if (event.status === LiveStatus.SCHEDULED) {
                eventObj = {
                    event: event,
                    products: products,
                    onDeleteAction: deleteAction,
                    onLiveEventAction: (id: string) => liveEventAction(id)
                }
                scheduledEventList.push(eventObj); 
            }
            else if (event.status === LiveStatus.LIVE) {
                eventObj = {
                    event: event,
                    products: products,
                    onDeleteAction: deleteAction,
                    onFinishedEventAction: (id: string) => finishEventAction(id)
                }
                liveEventList.push(eventObj); 
            }
            else if (event.status === LiveStatus.FINISHED) {
                eventObj = {
                    event: event,
                    products: products,
                    onDeleteAction: deleteAction,
                }
                finishedEventList.push(eventObj); 
            }
        });
        setScheduledEventList(scheduledEventList);
        setLiveEventList(liveEventList);
        setFinishedEventList(finishedEventList);
    }
    useEffect(() => {
        getData(); 
    }, []);
    const deleteAction =  async (id: string) => {
        await httpClient.deleteEvent(id);
        let idx = eventList.findIndex((event: any) => event.id === id)
        if (idx !== -1) {
            let newEventList: any = eventList.slice();
            newEventList.splice(idx, 1);
            setEventList(newEventList);
        }
        getData(); 
    };
    const liveEventAction = async (id: string)  => {
        list = await httpClient.getEventList();
        setEventList(list.liveEvents);
        let idx = list.liveEvents.findIndex((event: any) => event.id === id)
        if (idx !== -1) {
            let event: any = list.liveEvents[idx];
            let newEvent = {
                title: event.title,
                status: LiveStatus.LIVE,
                productIds: event.productIds
            }
            await httpClient.changeEvent(event.id, newEvent);
            let newEventList: any = eventList.slice();
            newEventList.splice(idx, 1, newEvent);
            setEventList(newEventList);
        }
        getData(); 
    }
    const finishEventAction = async (id: string)  => {
        list = await httpClient.getEventList();
        setEventList(list.liveEvents);
        let idx = list.liveEvents.findIndex((event: any) => event.id === id)
        if (idx !== -1) {
            let event: any = list.liveEvents[idx];
            let newEvent = {
                title: event.title,
                status: LiveStatus.FINISHED,
                productIds: event.productIds
            }
            await httpClient.changeEvent(event.id, newEvent);
            let newEventList: any = eventList.slice();
            newEventList.splice(idx, 1, newEvent);
            setEventList(newEventList);
        }
        getData(); 
    }
    const ScheduledEventCards = sampleScheduledEventCardPropsList.map((item: any) => 
        <ScheduledEventCard 
            key={item.event.id}
            event={item.event}
            products={item.products}
            onDeleteAction={item.onDeleteAction}
            onLiveEventAction={item.onLiveEventAction}
        />
    );
    const LiveEventCards = sampleLiveEventCardPropsList.map((item: any) => 
            <LiveEventCard 
                key={item.event.id}
                event={item.event}
                products={item.products}
                onDeleteAction={item.onDeleteAction}
                onFinishedEventAction={item.onFinishedEventAction}
            />
    );
    const FinishEventCards = sampleFinishedEventCardPropsList.map((item: any) => 
        <FinishedEventCard 
            key={item.event.id}
            event={item.event}
            products={item.products}
            onDeleteAction={item.onDeleteAction}
        />
    );
    return (
        <Page title={'이벤트 대시보드'} fullWidth secondaryActions={[{
            content: '라이브 쇼핑 페이지로 이동', onAction: () => {
                window.location.href = '/live-shopping-page'
            }
        }]} primaryAction={{
            content: '새 이벤트 생성하기', onAction: () => {
                history.push('create-live-event')
            }
        }}>
            <Layout>
                <Layout.Section oneThird>
                    <Heading>방송 대기중인 이벤트</Heading>
                    {ScheduledEventCards}
                    {/* <ScheduledEventCard event={sampleScheduledEventCardProps.event}
                                        products={sampleScheduledEventCardProps.products}
                                        onDeleteAction={sampleScheduledEventCardProps.onDeleteAction}
                                        onLiveEventAction={sampleScheduledEventCardProps.onLiveEventAction}
                    /> */}
                </Layout.Section>
                <Layout.Section oneThird>
                    <Heading>방송 중인 이벤트</Heading>
                    {LiveEventCards}
                    {/* <LiveEventCard event={sampleLiveEventCardProps.event}
                                   products={sampleLiveEventCardProps.products}
                                   onDeleteAction={sampleLiveEventCardProps.onDeleteAction}
                                   onFinishedEventAction={sampleLiveEventCardProps.onFinishedEventAction}
                    /> */}
                </Layout.Section>
                <Layout.Section oneThird>
                    <Heading>방송 종료된 이벤트</Heading>
                    {FinishEventCards}
                    {/* <FinishedEventCard event={sampleFinishedEventCardProps.event}
                                       products={sampleFinishedEventCardProps.products}
                                       onDeleteAction={sampleFinishedEventCardProps.onDeleteAction}
                    /> */}
                </Layout.Section>
            </Layout>
        </Page>
    )
}
