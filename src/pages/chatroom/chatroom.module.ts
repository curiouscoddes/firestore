import { RelativeTimePipe } from './../../pipes/relative-time/relative-time';
import { ChatProvider } from './../../providers/chat/chat';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatroomPage } from './chatroom';



@NgModule({
  declarations: [
    ChatroomPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ChatroomPage),
    PipesModule
  ],
})
export class ChatroomPageModule {}
