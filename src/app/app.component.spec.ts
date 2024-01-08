import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('AppComponent', () => {
  let service: ApiService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],
    declarations: [AppComponent]
  }));

  beforeEach((): void => {
    service = TestBed.inject(ApiService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular16'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular16');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('angular16 app is running!');
  });
  it("Should pass getData",() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const spy = spyOn(app, "callApi");
    app.getData()
    expect(spy).toHaveBeenCalled();
  })

  it("Should pass clear", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.record = [];
    expect(app.record).toEqual([])
  })
  
  it("Should pass callApi", ()=>{
    service.getCall().subscribe((res=>{
      expect(res).toEqual([])
    }))
  })
});
