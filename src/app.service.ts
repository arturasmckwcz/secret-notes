import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;font-size:9.5rem;font-weight:bold">Hello Spherity!</div>';
  }
}
