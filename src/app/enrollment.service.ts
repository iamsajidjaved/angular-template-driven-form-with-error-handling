import { User } from "./user";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class EnrollmentService {
  private _url = "";
  constructor(private _http: HttpClient) {}

  enrol(user: User) {
    return this._http
      .post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
