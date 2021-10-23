import axios from 'axios';

const COFFEE_URL = 'https://coffee.alexflipnote.dev/random.json';

const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class Services {
  getImageUrl(callback: any) {
    axios
      .get(COFFEE_URL, {headers: header})
      .then((res: any) => {
        console.log('API Response: ', res);

        callback({
          isSuccess: true,
          result: res.data.file,
        });
      })
      .catch((e: string) => {
        callback({
          isSuccess: false,
          result: 'Image Not Loaded: ' + e,
        });
      });
  }
}

const ApiServices = new Services();
export default ApiServices;
