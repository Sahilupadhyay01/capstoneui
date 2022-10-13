import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { UpdatePostRequest } from '../models/update-post';
import { AddPostRequest } from '../models/add-post';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string="https://localhost:7061/api/User/";
  private Url:string="https://localhost:7061";

  constructor(private http:HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authentication`,loginObj);
  }

  getAllPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.Url+'/api/Post');
  }

  getPostById(id:string): Observable<Post>{
    return this.http.get<Post>(this.Url+'/api/Post/'+id);
  }

  updatePost(id:string | undefined,updatePostRequest:UpdatePostRequest):Observable<Post>{
    return this.http.put<Post>(this.Url+'/api/Post/'+id,updatePostRequest);
  }

  addPost(addPostRequest:AddPostRequest):Observable<Post> {
    return this.http.post<Post>(this.Url+'/api/Post/',addPostRequest);
  }

  deletePost(id:string | undefined):Observable<Post> {
    return this.http.delete<Post>(this.Url+'/api/Post/'+id);
  }


}
