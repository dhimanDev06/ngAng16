import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
describe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should pass add if", () =>{
    const a = 1;
    const b = 2;
    const result = service.addTest(a,b);
    expect(result).toEqual(-1)
  })
  it("should pass add else", () =>{
    const a = 2;
    const b = 1;
    const result = service.addTest(a,b);
    expect(result).toEqual(3)
  })

  it("should pass getCall",()=>{
    spyOn(http,'get');
    service.getCall()
  })
});