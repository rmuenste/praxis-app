import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios, { AxiosInstance } from 'axios';

export interface ErrorResponse {
	id: string;
	code: string;
	message: string;
}

@Component({
  selector: 'app-our-service-detail',
  templateUrl: './our-service-detail.component.html',
  styleUrls: ['./our-service-detail.component.css']
})
export class OurServiceDetailComponent implements OnInit {

  private axiosClient: AxiosInstance;

  wpData: any = {};

  slug: any = '';

  loading: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.axiosClient = axios.create();
    this.loading = true;

   }

	// Errors can occur for a variety of reasons. I normalize the error response so that
	// the calling context can assume a standard error structure.
	private normalizeError( error: any ) : ErrorResponse {

		// NOTE: Since I'm not really dealing with a production API, this doesn't really
		// normalize anything (ie, this is not the focus of this demo).
		return({
			id: "-1",
			code: "UnknownError",
			message: "An unexpected error occurred."
		});

	}

	// I perform a GET request with the given options.
	public async get<T>( ) : Promise<T> {

		try {

			var axiosResponse = await this.axiosClient.request<T>({
				method: "get",
				url: `https://praxismuenster.de/wp-json/wp/v2/pages?slug=${this.slug}&_embed`,
      });

			return( axiosResponse.data[0] );

		} catch ( error ) {

      console.log("error");
			return( Promise.reject( this.normalizeError( error ) ) );

		}

	}

  ngOnInit() {

    this.loading = true;

    this.route.paramMap.subscribe( params => {
      this.slug = params.get('serviceSlug');
//      console.log("Slug: ", this.slug);

      this.get().then( (data) => {

//        console.log("OnInit Ok");
        console.log(data);
        this.wpData = data;
        let removeString: string = '';

        if (this.slug === 'pregnancy') {
          removeString = this.wpData.content.rendered.substring(20, 204);
        }
        else if(this.slug === 'care') {
          removeString = this.wpData.content.rendered.substring(20, 201);
          console.log(removeString);
        }
        else if(this.slug === '3d-4d-ultrasound') {
          removeString = this.wpData.content.rendered.substring(20, 208);
          console.log(removeString);
        }
        else if(this.slug === 'postop') {
          removeString = this.wpData.content.rendered.substring(20, 208);
          console.log(removeString);
        }
        else if(this.slug === 'office-hours') {
          removeString = this.wpData.content.rendered.substring(20, 223);
          console.log(removeString);
        }
        else if(this.slug === 'impfungen') {
          removeString = this.wpData.content.rendered.substring(20, 208);
          console.log(removeString);
        }

        this.wpData.content.rendered = this.wpData.content.rendered.replace(removeString, '');
        console.log(this.wpData);
        this.loading = false;

      }).catch( (err) => {

//        console.log("OnInit BAD");
      });


    });



  }
//<div class="column">

  goToHome(url: string) {
    this.router.navigateByUrl(url);
  }

}
