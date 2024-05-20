import {Component, ElementRef, ViewChild} from '@angular/core';
import {Swiper} from "swiper";
import {register} from "swiper/element/bundle";

register()

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  public swiperDescription = 'Swiper is the most modern free and open source mobile touch slider with hardware accelerated transitions and amazing native behavior. Use it on websites, web apps, and mobile native/hybrid apps.'
  public swiper!: Swiper;

  segmentList: Array<string> = ['All', 'Breakfast', 'Main Dish', 'Drinks'];
  selectedSegment: string = this.segmentList[0];

  constructor() {
  }

  // react to events from swiper and segment
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any) {
    const index = e.target.swiper.activeIndex
    this.selectedSegment = this.segmentList[index]
  }

  onSelectSegment(index: number) {

  }


  protected readonly Array = Array;
}
