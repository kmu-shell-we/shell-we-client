import ApiResponse from '@/api/dto/common';

export default class ApiRequest {
  private readonly baseUrl?: string;
  private token?: string;

  public constructor() {
    this.baseUrl =
      typeof window === 'undefined' ? process.env['NEXT_PUBLIC_API_URL '] : window.origin + '/api';
  }

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    const res: ApiResponse<T> = await (await fetch(this.baseUrl + url, options)).json();

    if (!res.success) {
      throw new Error(res.message!);
    }

    return res.data!;
  }

  private generateBody(body?: object): string | undefined {
    if (!body) {
      return undefined;
    }

    return JSON.stringify(body);
  }

  private generateHeader(): Headers {
    const headers = new Headers();

    if (this.token) {
      headers.set('Authorization', `Bearer ${this.token}`);
    }

    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return headers;
  }
}
