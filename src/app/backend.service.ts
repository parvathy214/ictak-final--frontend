import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class BackendService {
  
//   constructor(private http:HttpClient) { }
//   // api='http://localhost:2341/api'

//   api:string = `api`
 
  
//   //admin
//   login(data:any){
//     return this.http.post(`${this.api}/auth`,data)
//   }
//   getUserData(){
//     return this.http.get(`${this.api}/stafflist`)
//   }
//   addsiteUser(user:any){
//     return this.http.post(`${this.api}/staff`,user)
//   }
//   deletestaff(id:any){
//     return this.http.delete(`${this.api}/staff/${id}`)
//   }
//   getCurrentdata(id:any){
//     return this.http.get(`${this.api}/staff/${id}`)
//   }

//   updateUser(data:any,id:any){
//     console.log(id)
//     return this.http.put(`${this.api}/staff/${id}`,data)
//      }
//   //learner

//   getData() {
//     return this.http.get(`${this.api}`)
//     }

//   addLearner(learner:any){
//     return this.http.post(`${this.api}`,learner)
//   }


//   updateLearner(learner:any,id:any){
//     console.log(id)
//   return this.http.put(`${this.api}/${id}`,learner)
// }
  
// deletelearner(id:any){
//   return this.http.delete(`${this.api}/${id}`)
//  }

//  addcsv(formdata:any){
  
//   return this.http.post(`${this.api}/file`,formdata)
//  }

//  getcurrent(id:any){
//   console.log(`backend service id is ${id}`)
//  return this.http.get(`${this.api}/${id}`)
// }

// gettoken() :boolean{
//   return !!localStorage.getItem('token')
// }

// }
export class BackendService {
  
  constructor(private http:HttpClient) { }
  // api='http://localhost:2341/api'
  api:String = `api`

  getData() {
  return this.http.get(`${this.api}`)
  }
  
  //admin
  login(data:any){
    return this.http.post(`${this.api}/auth`,data)
  }
  getUserData(){
    return this.http.get(`${this.api}/stafflist`)
  }
  addsiteUser(user:any){
    return this.http.post(`${this.api}/staff`,user)
  }

deletestaff(id:any){
    return this.http.delete(`${this.api}/staff/${id}`)
  }
  getCurrentdata(id:any){
    return this.http.get(`${this.api}/staff/${id}`)
  }

  updateUser(data:any,id:any){
    console.log(id)
    return this.http.put(`${this.api}/staff/${id}`,data)
     }
//learner
addLearner(learner:any){
  return this.http.post(`${this.api}`,learner)
}


updateLearner(learner:any,id:any){
  console.log(id)
return this.http.put(`${this.api}/${id}`,learner)
}

deletelearner(id:any){
return this.http.delete(`${this.api}/${id}`)
}
addcsv(formdata:any){
  
  return this.http.post(`${this.api}/file`,formdata)
 }

 getcurrent(id:any){
  console.log(`backend service id is ${id}`)
 return this.http.get(`${this.api}/${id}`)
}
gettoken() :boolean{
  return !!localStorage.getItem('token')
}

}