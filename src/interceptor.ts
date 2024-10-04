import { HttpEvent, HttpEventType, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export function routerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = localStorage.getItem('authToken') || [];
  req.headers.set('Authorization', 'Bearer ' + authToken)
  req.headers.append('Authorization', 'Bearer ' + authToken)
  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', event.status);
      }
      let newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken),
        setHeaders: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      return next(newReq)
    })
  );
}
