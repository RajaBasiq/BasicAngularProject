import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fileservice: FileService) { }

  ngOnInit(): void 
  {
    console.log("basiq")
  }
  public getFile(fileid:number)
  {
    this.fileservice.getPostById(2).subscribe((data: any[]) => {
      alert(data);
    });
  }

}
