import axios from 'axios';
import router from '../router/index'
let baseURL=process.env.BASE_URL;
const instance=axios.create({
  baseURL,
  timeout:1500,
});

class xhr {
  static get(url,data,config)
  {
    return new promise((resolve,reject)=>{
      instance.get(url,{params:data},config).then(res=>{
        if(res.data.code==403)
        {
          router.push();
        }
         resolve(res.data);
      }).catch(err=>{
          reject(err)

      })
    })
  }
  static myFetch(url,data,config,methods)
  {
    return new promise((resolve,reject)=>{
      instance[methods](url,data,config).then(res=>{
        if(res.data.code==403)
        {
          router.push();
        }
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    })
  }
  static post(url,data,config)
  {
    return this.myFetch(url,data,config,"post");
  }
}

export default xhr
