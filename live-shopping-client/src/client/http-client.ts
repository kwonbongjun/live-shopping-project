let count = 0
export class HttpClient {
    constructor(){
        count++;
        if(count > 1){
            throw new Error('httpService has been already instantiated')
        }
    }
    async getEventList() {
        const res = await fetch('http://localhost:5000/live-event').then(function(response) {
            return response.json();
          }).then(function(data) {
            return data;
          }).catch(function() {
          });
        return res;
    }
    async getProductList() {
        const res = await fetch('http://localhost:5000/product').then(function(response) {
            return response.json();
          }).then(function(data) {
            return data;
          }).catch(function() {
          });
        return res;
    }
    async createEvent(data: object) {
        const res = await fetch('http://localhost:5000/live-event', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses JSON response into native JavaScript objects
        return res;
    }
    async getProduct(id: string) {
      const res = await fetch('http://localhost:5000/product/:'+id).then(function(response) {
          return response.json();
        }).then(function(data) {
          return data;
        }).catch(function() {
        });
      return res;
    }
    async changeEvent(id: string, data: object) {
      const res = await fetch('http://localhost:5000/live-event/'+id, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
      })
      .then(response => response)
      .then(function(data) {
        console.log(data);
        return data;
      })
      .catch(function(e) {
        console.log(e);
      });    
      return res;
    }
    async deleteEvent(id: string) {
      const res = await fetch('http://localhost:5000/live-event/'+id, {
        method: 'DELETE', 
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer',
      })
      .then(response => response)
      .then(function(data) {
        console.log(data);
        return data;
      })
      .catch(function(e) {
        console.log(e);
      });    
      return res;
    }
}
export const httpClient = new HttpClient();
