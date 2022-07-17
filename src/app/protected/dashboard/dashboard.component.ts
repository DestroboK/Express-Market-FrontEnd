import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  images: any[] = []
  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '960px',
      numVisible: 4
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];
  data: any[] =[
    {
        "previewImageSrc": "https://scontent.fhex10-1.fna.fbcdn.net/v/t1.6435-9/80016866_115854856576358_7011777631070715904_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=cad550&_nc_ohc=tZsITlHDYrQAX_5_tuz&_nc_ht=scontent.fhex10-1.fna&oh=00_AT_I99N1xqtRCd0LdQyrXwHG8XZzskB5A8V11mi8NsR-aw&oe=62F85395",
        "thumbnailImageSrc": "https://scontent.fhex10-1.fna.fbcdn.net/v/t1.6435-9/80016866_115854856576358_7011777631070715904_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=cad550&_nc_ohc=tZsITlHDYrQAX_5_tuz&_nc_ht=scontent.fhex10-1.fna&oh=00_AT_I99N1xqtRCd0LdQyrXwHG8XZzskB5A8V11mi8NsR-aw&oe=62F85395",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc": "https://m.media-amazon.com/images/I/61E68WLcP2L._AC_UX522_.jpg",
        "thumbnailImageSrc": "https://m.media-amazon.com/images/I/61E68WLcP2L._AC_UX522_.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    {
        "previewImageSrc": "https://m.media-amazon.com/images/I/71yJAXq-uKL._AC_UL320_.jpg",
        "thumbnailImageSrc": "https://m.media-amazon.com/images/I/71yJAXq-uKL._AC_UL320_.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
    },
    {
        "previewImageSrc": "https://www.researchgate.net/publication/350065873/figure/fig5/AS:1001610025123844@1615813847982/Stability-of-the-YGYGY-and-HGHGH-nanoparticles-in-water-and-in-phosphoric-buffer-solution.png",
        "thumbnailImageSrc": "https://www.researchgate.net/publication/350065873/figure/fig5/AS:1001610025123844@1615813847982/Stability-of-the-YGYGY-and-HGHGH-nanoparticles-in-water-and-in-phosphoric-buffer-solution.png",
        "alt": "Description for Image 4",
        "title": "Title 4"
    },
    {
        "previewImageSrc": "https://i1.sndcdn.com/avatars-lkZn49jnqNKyyO39-Up3r1Q-t500x500.jpg",
        "thumbnailImageSrc": "https://i1.sndcdn.com/avatars-lkZn49jnqNKyyO39-Up3r1Q-t500x500.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    }
    
]
  ngOnInit() {
    this.images = this.data
  }
}
