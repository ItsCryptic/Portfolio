import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService  {

  constructor(_private: Router) { 

  }
  setRouteGuard(newModule: any) {
    let isAdded = false;
    var moduleObjArr = this.getStorageItems();

    for (let moduleObj of moduleObjArr) {
      if (moduleObj.module === newModule) {
        isAdded = true;
      }
    }
    if (!isAdded) {
      moduleObjArr.push({module:newModule});
      localStorage.setItem("modules",JSON.stringify(moduleObjArr));
    }
  }
  removeRouteGuard(newModule: any) {
    var moduleObjArr = this.getStorageItems();
    var newModuleObjArr = moduleObjArr.filter((item: { module: any; }) => item.module !== newModule);
    localStorage.setItem("modules",JSON.stringify(newModuleObjArr));
  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    var moduleObjArr = this.getStorageItems();
    console.log(next.data["module"]);
    let canActivate = false;
    /* Activate routing based on the routing json obj*/
    for (let module of moduleObjArr) {
        if(module.module === next.data["module"]){
            canActivate = true ; 
        } 
    };
    return canActivate;
}
  
getStorageItems(){
  /* Common method to retrive route module obj array from localstorage*/
  let moduleObjArr = eval('(' + localStorage.getItem("modules") + ')');
  return moduleObjArr === null ? [{}] : moduleObjArr;
}
}
