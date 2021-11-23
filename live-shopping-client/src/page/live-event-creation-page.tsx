import {
    ActionList,
    Button,
    Card,
    Form,
    FormLayout,
    Modal,
    Page,
    Popover,
    ResourceList,
    TextField, TextStyle, Thumbnail,
} from "@shopify/polaris";
import {useCallback, useEffect, useState} from "react";
import {LiveStatus} from "../entities/live-event.entity";
import {Product} from "../entities/product.entity";
import {useHistory} from "react-router-dom";
import { httpClient } from "../client/http-client";
export function LiveEventCreationPage(){

    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [eventName, setEventName] = useState<string>('이벤트 선택하기');
    const [status, setStatus] = useState<LiveStatus>(LiveStatus.SCHEDULED);
    const [eventList, setEventList] = useState<[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const [popoverActive, setPopoverActive] = useState<boolean>(false);
    const [modalActive, setModalActive] = useState<boolean>(false);

    useEffect(() => {
        let list, product;
        async function init() {
            list = await httpClient.getEventList();
            product = await httpClient.getProductList();
            console.log(list, product);
            setProducts(product.products);
            setEventList(list.liveEvents);
        }
        init(); 
    },[]);

    const handleModalChange = useCallback(() => setModalActive(!modalActive), [modalActive]);

    const handleSubmit = useCallback(async (_event) => {
        const event= {
            id: (eventList.length + 1) + '',
            title: title,
            status: eventName,
            productIds: selectedProducts
        };
        await httpClient.createEvent(event);
    }, [eventList, title, eventName, selectedProducts]);
    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        [],
    );
    const handleTitleChange = useCallback((value) => {setTitle(value);console.log(title, value)}, [title]);
    const selectEvent = useCallback(
        (e) => console.log(e),
        [],
      );
    const popOverActivator = (
        <Button onClick={togglePopoverActive} disclosure>
            { eventName }
        </Button>
    );
    const modalActivator = <Button onClick={handleModalChange}>상품 선택하기</Button>;

    return (
        <Page title={'이벤트 생성 페이지'} breadcrumbs={[{content: 'live event', onAction() {
                history.push('list')
            }}]}>
            <Card title={'이벤트 생성하기'}>
                <Card.Section>
                    <Form onSubmit={handleSubmit}>
                        <FormLayout>
                            <TextField
                                value={title}
                                onChange={handleTitleChange}
                                label="제목"
                                type="text"
                            />
                            <Popover
                                active={popoverActive}
                                activator={popOverActivator}
                                onClose={togglePopoverActive}
                            >
                                <ActionList items={[{content: '방송대기', onAction() {
                                    selectEvent('방송대기'); togglePopoverActive(); setEventName(LiveStatus.SCHEDULED)} }, 
                                    {content: '방송중', onAction() {
                                    selectEvent('방송중'); togglePopoverActive(); setEventName(LiveStatus.LIVE)} },
                                    {content: '방송종료', onAction() {
                                    selectEvent('방송종료'); togglePopoverActive(); setEventName(LiveStatus.FINISHED)} }]}/>
                            </Popover>
                            <Modal
                                activator={modalActivator}
                                open={modalActive}
                                onClose={handleModalChange}
                                title="상품을 선택해주세요."
                                primaryAction={{
                                    content: '상품 추가 완료',
                                    onAction: handleModalChange,
                                }}
                            >
                                <Modal.Section>
                                    <ResourceList
                                        selectedItems={selectedProducts}
                                        onSelectionChange={(selectedItems: string[])=>{setSelectedProducts(selectedItems)}}
                                        selectable
                                        items={products.map((product) => ({
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            media: (
                                                <Thumbnail
                                                    source={product.thumbnail}
                                                    alt={product.name}
                                                />
                                            ),

                                        }))}
                                        renderItem={(item) => {
                                            const {id, name, media, price} = item;
                                            return (
                                                <ResourceList.Item
                                                    id={id}
                                                    onClick={()=>{}}
                                                    media={media}
                                                    accessibilityLabel={`View details for ${name}`}
                                                >
                                                    <h3>
                                                        <TextStyle variation="strong">{name}</TextStyle>
                                                    </h3>
                                                    <div>￦{price}</div>
                                                </ResourceList.Item>
                                            );
                                        }}
                                    />
                                </Modal.Section>
                            </Modal>
                            <Button primary submit>이벤트 생성하기</Button>
                        </FormLayout>
                    </Form>
                </Card.Section>
            </Card>
        </Page>
    )
}
