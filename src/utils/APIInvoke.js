import config from '../config'

class APIInvoke {
    async invokeGET(resource, queryParams = []) {
        const queryString = queryParams.reduce((last, q, i) => last + `${i === 0 ? '?' : '&'}${q}`, '');
        const token = localStorage.getItem('token');
        let bearer;
        if (token === '') {
          bearer = '';
        } else {
          bearer = `${token}`;
        }
      
        const data = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': bearer
          }
        };
      
        const url = `${config.api.baseURL}${resource}${queryString}`;
        let response = await fetch(url, data);
        if (response.ok) {
          response = await response.json();
        } else {
          throw new Error(`Error fetching data: ${response.status}`);
        }
      
        return response;
      }

      async invokePUT(resource, body) {
        const token = localStorage.getItem('token');
        let bearer;
        if (token === '') {
          bearer = '';
        } else {
          bearer = `${token}`;
        }
      
        const url = `${config.api.baseURL}${resource}`;
        const existingData = await this.invokeGET(resource);
        const updatedData = { ...existingData, ...body };
      
        const data = {
          method: 'PUT',
          body: JSON.stringify(updatedData),
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': bearer
          }
        };
      
        let response = await fetch(url, data);
        if (response.ok) {
          response = await response.json();
        } else {
          throw new Error(`Error updating data: ${response.status}`);
        }
      
        return response;
      }

    async invokePOST(resource, body) {

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${config.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }

    async invokeDELETE(resource) {

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        const data = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${config.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
}

export default new APIInvoke()