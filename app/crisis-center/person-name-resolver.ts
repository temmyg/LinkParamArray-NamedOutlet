import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class PersonNameResolver implements Resolve<string> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
        return Observable.of("Johnson Kley");
    }
}