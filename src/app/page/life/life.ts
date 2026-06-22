/* Angular */
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-life',
  imports: [],
  templateUrl: './life.html',
  styleUrl: './life.css',
})
export class Life implements AfterViewInit {
  constructor(
    /* Angular */ private el: ElementRef, private router: Router,
    /* Service */ public screen: Screen,
  ) { }

  ngAfterViewInit() {
    const notes = this.el.nativeElement.querySelectorAll('.sticky-note');
    notes.forEach((note: HTMLElement) => {
      const rotation = (Math.random() - 0.5) * 15;
      note.style.transform = `rotate(${rotation}deg)`;
    });
  }

  isJumping = false;
  jumpscareRotation = 0;

  onAction(action: { name: string, icon?: string, type: string, action: string }) {
    if (action.type === "monika") {
      this.isJumping = false;
      this.jumpscareRotation = (Math.random() - 0.5) * 60; // random angle between -30deg and +30deg
      setTimeout(() => {
        this.isJumping = true;
      }, 10);
      setTimeout(() => {
        this.isJumping = false;
      }, 1010);
    } else if (action.type === 'openLink') {
      window.open(action.action, '_blank');
    }
  }

  notes: { heading: string; content: string, action?: { name: string, icon?: string, type: string, action: string } }[] = [
    {
      heading: "2025-12-19",
      content: "드디어 부모님 집에서 독립했어요.+23 살이니까 빨리 한 건가요.",
    },
    {
      heading: "2026-01-01",
      content: "2025년을 살아남으신 여러분,+수고하셨어요.",
    },
    {
      heading: "2026-01-08",
      content: "가장 차가운 사람을 위한+가장 차가운 생일.+생일에 뭘 했냐면... 일했어요.",
    },
    {
      heading: "2026-01-14",
      content: "세인트마틴 섬에 가고싶어서+비용을 계산해봤는데, 1천만 원 정도....+연봉의 30%를 1 년의 1.4% 기간에 쓰는 건데+그래도 가고싶어.",
    },
    {
      heading: "2026-01-29",
      content: "WinRAR 라이선스를 구매했어요.+그게 뭐냐고요?+무제한 무료 체험판을 제공하는+유명한 유료 소프트웨어예요.",
    },
    {
      heading: "2026-02-20",
      content: "오랜만에 DDLC를 하다가+그만 늦잠을 잤어요.",
      action: { name: "저스트 모니카.", type: "monika", action: "monika" }
    },
    {
      heading: "2026-05-12",
      content: "언제쯤 집과 차를 살 수 있을까요.",
    },
    {
      heading: "2026-05-26",
      content: "코스프레 의상을 질렀는데,+뭔지는 안알려줄거야.",
    },
    {
      heading: "2026-06-21",
      content: "킹누 - 하쿠지츠+감정적으로 힘든 시간을 보내는 중인데,+마침 내게 찾아온 이 노래의 가사는....",
      action: { name: "듣기", icon: "music_video", type: "openLink", action: "https://youtu.be/ony539T074w?si=B3NjMsCojy4n97WU" }
    }
  ];
}
