/* Angular */
import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [
    /* Angular */ RouterLink,
  ],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css',
})
export class Notfound implements OnInit {
  quote = signal('404');
  quotes = [
    "단어 '프로그래머' 속 'ㅎ'은$행복을 의미한대요.",
    "카페인을 많이 마시면 안 좋나요?$저는 카페인을 안 마실 때 안 좋던데….",
    "명언을 찾을 수 없었어요.$404 페이지로 이동할까요?",
    "월요일에는 코딩을 하지 않는게 좋아요.$그 주 내내 월요일에 짠 코드를$디버깅하면서 보내야 할 테니까요.",
    "프로그래머: Coffee를 주입하면$Code를 생산하는 유기체.",
    "제 Discord 서버는 몇 년째 조용한데도$멤버 대부분이 떠나지 않으셨어요.$정말 감사해요.",
  ];
  quoteRegenerating = false;
  async regenerateQuote() {
    this.quoteRegenerating = true;
    setTimeout(() => { this.quoteRegenerating = false; }, 1000);
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.quote.set(this.quotes[randomIndex]);
  }

  async ngOnInit() {
    await this.regenerateQuote();
  }
}
