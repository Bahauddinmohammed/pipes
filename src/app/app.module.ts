import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { UserComponent } from './user/user.component';
import { DemoComponent } from './demo/demo.component';
import { StdPipe } from './std.pipe';
import { DemosPipe } from './demos.pipe';
import { PractiveComponent } from './practive/practive.component';
import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    FilterPipe,
    UserComponent,
    DemoComponent,
    StdPipe,
    DemosPipe,
    PractiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
