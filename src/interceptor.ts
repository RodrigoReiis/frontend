import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export function routerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }

    const authToken = localStorage.getItem('authToken') || [];
    // Clone the request to add the authentication header.
    const newReq = req.clone({
      headers: req.headers.append('X-Authentication-Token', authToken),
    });
    return next(newReq);
  }));
}
