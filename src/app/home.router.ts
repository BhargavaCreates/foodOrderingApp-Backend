import { Controller, Get, Route, Tags } from 'tsoa';

@Tags('Menu')
@Route('/')
export class HomeController extends Controller {
  @Get('/')
  public async home(): Promise<any> {
    return {
      message:
            'hi 👋! You have entered the Kitchen Directly 😂. No worries. Visit https://adfoodio.netlify.app to order best of our meals.',
        docs: "https://adfoodio-backend.onrender.com/docs/"
    };
  }
}
