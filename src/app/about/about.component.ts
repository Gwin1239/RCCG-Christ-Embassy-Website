import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


interface Section {
  title: string;
  content: string;
  open: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  sections: Section[] = [
    {
      title: 'The Bible',
      open: true,
      content: `
        <p>We believe that the Bible is “God’s Word”. The truths revealed in it did not have their origin with men, but with God. The Holy Spirit inspired the human authors of the Bible. We therefore believe that the bible is without error, completely true, relevant and an up-to-date book. We receive the sixty-six books of the Old and New Testament as eternal, authoritative, coherent, complete and all sufficient, and the only infallible rule of faith. Its message is intended primarily for the human race. It is expressed in words and in terms, which human beings can understand. It’s central theme and purpose is the salvation of man.</p>
        <ul>
          <li>2 Timothy 3:16-17</li>
          <li>2 Peter 1:20-21</li>
          <li>Psalm 12:6</li>
          <li>Matthew 24:35</li>
          <li>Psalm 119:160</li>
        </ul>
      `
    },
    { title: 'God', open: false, content: `<p><!-- God content here --></p>` },
    { title: 'Jesus Christ', open: false, content: `<p><!-- Jesus Christ content here --></p>` },
    { title: 'The Holy Spirit', open: false, content: `<p><!-- Holy Spirit content here --></p>` },
    { title: 'The Trinity', open: false, content: `<p><!-- Trinity content here --></p>` },
    { title: 'The Fall Of Man', open: false, content: `<p><!-- Fall of Man content here --></p>` },
    { title: 'Salvation', open: false, content: `<p><!-- Salvation content here --></p>` }
  ];

  toggle(idx: number) {
    this.sections[idx].open = !this.sections[idx].open;
  }

}
