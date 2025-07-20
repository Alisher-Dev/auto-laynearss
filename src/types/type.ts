import "axios";

declare module "axios" {
  export interface AxiosInstance {
    get<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = T>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
    put<T = any, R = T>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
    delete<T = any, R = T>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
  }
  export interface InternalAxiosRequestConfig {
    isRetry?: boolean;
  }
}

export interface IPagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  offset: number;
}

export interface IPaginationParams {
  limit?: number;
  page?: number;
}

export interface IApiResponse<T> {
  data: T;
  status: number;
  date: string;
  pagination: IPagination | null;
}

export interface IContent {
  uz?: string;
  ru?: string;
}

export interface IRootEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IApiError {
  statusCode: number;
  message: string;
  error: string;
}

export interface IModalController {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

// model
export interface IModel extends IRootEntity {
  name: IContent;
  description?: IContent;
  content?: IContent;
  banner?: string;
  videos: string[];
  colors: IColors[];
  variants: IVariants[];
}

// color

export interface IColors extends IRootEntity {
  image: string[];
  modelId: number;
  name: IContent;
  value: string;
}

// variants
export interface IVariants extends IRootEntity {
  description?: IContent;
  discount: number;
  modelId: number;
  price: number;
  title: IContent;
  values: IValues[];
}

// special-offer

export interface ISpecialOffer extends IRootEntity {
  content?: IContent;
  description?: IContent;
  image?: string;
  name: IContent;
}

// values

export interface IValues extends IRootEntity {
  attribute: IAttribute;
  title: IContent;
}

// attribute

export interface IAttribute extends IRootEntity {
  icon: string;
  name: IContent;
}

// request

export interface IRequest extends IRootEntity {
  fullName: string;
  phone: string;
  content: string;
}

export interface IRequestResponce {
  fullName: string;
  phone: string;
  content: string;
}
