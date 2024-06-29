class GlobalResponse<T> {
  status: boolean;
  message: string;
  data: T;

  constructor(status: boolean, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  toJson(): string {
    return JSON.stringify(this);
  }

  static fromJson<U>(json: string): GlobalResponse<U> {
    const parsed = JSON.parse(json);
    return new GlobalResponse<U>(parsed.status, parsed.message, parsed.data);
  }
}
