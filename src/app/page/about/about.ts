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
    { site: 'YOUTUBE', url: 'https://youtube.com/@rob0face', name: 'rob0face', aria: '로보페이스 유튜브로 가기', type: 'less' },
    { site: 'INSTAGRAM', url: 'https://instagram.com/rob0face', name: 'rob0face', aria: '로보페이스 인스타그램으로 가기', type: 'main' },
    { site: 'THREADS', url: 'https://www.threads.net/@rob0face', name: 'rob0face', aria: '로보페이스 스레드로 가기', type: 'less' },
    { site: 'REDDIT', url: 'https://reddit.com/user/rob0face', name: 'rob0face', aria: '로보페이스 레딧으로 가기', type: 'less' },
    { site: 'X', url: 'https://x.com/rob0face', name: 'rob0face', aria: '로보페이스 엑스(구 트위터)로 가기', type: 'less' },
    { site: 'GITHUB', url: 'https://github.com/rob0face', name: 'rob0face', aria: '로보페이스 깃허브로 가기', type: 'less' },
    { site: 'WEBSITE', url: 'https://roboface.net', name: 'roboface.net', aria: '로보페이스 웹사이트로 가기', type: 'main' },
    { site: 'BLUESKY', url: 'https://bsky.app/profile/roboface.net', name: 'roboface.net', aria: '로보페이스 블루스카이로 가기', type: 'less' },
    { site: 'EMAIL', url: 'mailto:geonjungdave@outlook.com', name: 'geonjungdave', aria: '이메일 보내기', type: 'less' }
  ];
  main_socials = this.socials.filter(social => social.type === 'main');
  less_socials = this.socials.filter(social => social.type === 'less');

}
