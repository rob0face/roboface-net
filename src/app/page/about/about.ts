/* Angular */
import { Component } from '@angular/core';

/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(
    /* Service */ public screen: Screen,
  ) {}

  socials = [
    { site: 'YOUTUBE', url: 'https://youtube.com/@rob0face', name: 'rob0face', aria: '로보페이스 유튜브로 가기' },
    { site: 'INSTAGRAM', url: 'https://instagram.com/rob0face', name: 'rob0face', aria: '로보페이스 인스타그램으로 가기' },
    { site: 'THREADS', url: 'https://www.threads.net/@rob0face', name: 'rob0face', aria: '로보페이스 스레드로 가기' },
    { site: 'REDDIT', url: 'https://reddit.com/user/rob0face', name: 'rob0face', aria: '로보페이스 레딧으로 가기' },
    { site: 'X', url: 'https://x.com/rob0face', name: 'rob0face', aria: '로보페이스 엑스(구 트위터)로 가기' },
    { site: 'GITHUB', url: 'https://github.com/rob0face', name: 'rob0face', aria: '로보페이스 깃허브로 가기' },
    { site: 'WEBSITE', url: 'https://roboface.net', name: 'roboface.net', aria: '로보페이스 웹사이트로 가기' },
    { site: 'BLUESKY', url: 'https://bsky.app/profile/roboface.net', name: 'roboface.net', aria: '로보페이스 블루스카이로 가기' },
    { site: 'EMAIL', url: 'mailto:geonjungdave@outlook.com', name: 'geonjungdave', aria: '이메일 보내기' }
  ];

}
