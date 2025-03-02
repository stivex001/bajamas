import { AxiosRequestConfig } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiOptions extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method: HttpMethod;
}

export interface Meta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedRequestParams {
  page?: number;
  pageSize?: number;
}

// export type ApiError = AxiosError;
export interface ApiError {
  response?: any;
  message?: string;
  status?: number;
  data?: any;
}

// Common types
export type ID = string | number;

export interface Timestamp {
  createdAt: string;
  updatedAt: string;
}

// Project types
export interface Project extends Timestamp {
  length: number;
  id: ID;
  name: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
  clientId: ID;
  meta?: Meta;
  status: ContractStatus;
  serviceNo: string;
}

export interface PaginatedProjectResponse {
  length: number;
  projects: Project[];
  meta: Meta;
  title: string;
  description: string;
  projectNo: string;
  address: string;
  status: ContractStatus;
  statusRel: ContractStatus;
  serviceNo: string;
  startDate: string;
  endDate: string;
}

// Order types
export interface OrderItem {
  productId: ID;
  quantity: number;
  unitPrice: number;
}

export interface Order extends Timestamp {
  id: ID;
  customerId: ID;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  shippingAddress: string;
  paymentMethod: "credit_card" | "paypal" | "bank_transfer";
  meta?: Meta;
}

export interface PaginatedOrderResponse {
  orders: Order[];
  meta: Meta;
}

// Contract types
export interface ContractStatus {
  label: string;
  color: string;
}

export interface Contract extends Timestamp {
  id: ID;
  title: string;
  contractNo: string;
  startDate: string;
  endDate: string;
  additionalAddress?: string;
  address: string;
  provider: string;
  companyId: number;
  description: string;
  documentsUrl: string[];
  imagesUrl: string[];
  price: number;
  statusRel: ContractStatus;
  onkz: string[];
  statusId: number;

  meta: Meta;
}

export interface PaginatedContractResponse {
  contracts: Contract[];
  meta: Meta;
}



export interface Folder {
  belongTo: string;
  date: string | number | Date;
  id: ID;
  name: string;
  slug: string;
  startDate: string;
  endDate: string;
  additionalAddress?: string;
  address: string;
  companyId: number;
  description: string;
  status: ContractStatus;
}

export interface Schedule {
  schedules: {
    title: string;
    date: string | number | Date;
    id: ID;
    userId: ID;
    name: string;
    type: string;
    startDate: string;
    endTime: string;
    startTime: string;
    endDate: string;
    role?: string;
    address: string;
    companyId: number;
    description: string;
    createdAt: string;
    statusRel: string;
    monthKeyts?: {};
    status: ContractStatus;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      id: ID;
    };
  }[];
  rolesWithUsers: {
    role: string;
    users: [string];
  };
}

export interface Company {
  companies: {
    title: string;
    date: string | number | Date;
    id: ID;
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    role?: string;
    address: string;
    companyId: number;
    description: string;
    status: ContractStatus;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      id: ID;
    };
  };
  rolesWithUsers: {
    role: string;
    users: [string];
  };
}

export interface CurrentCompany {
 
  zipCode?: string;
  street?: string;
  id: ID;
  logo?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  description?: string | null;
  address?: string | null;
  houseNumber?: string | null;
  managingDir?: string | null;
  headquarters?: string | null;
  noOfEmpl?: string | null;
  bankDetails?: string | null;
}
interface RoleManagementType {
  name: string;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  id: ID;
  companyId: ID;
  isActive: boolean;
  image?: string | null;
  phone?: string | null;
  address?: string | null;
  managingDir?: string | null;
  activationToken?: string | null;
  createdAt?: string;
  updatedAt: string;
  roleId?: number;
  roles?: RoleManagementType;
}



export interface Status {
  label: string;
  color: string;
  id: ID;
}

export interface Favourite {
  label: string;
  value: string;
  id: ID;
}

export interface Search {
  searchText: string;
}

export interface Category {
  color: string;
  belongsTo: string;
  name: string;
  id: ID;
}

export interface LogMetadata {
  title?: string;
  status?: string;
  color?: string;
  img?: string;
  doc?: string;
}

export interface GenUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface LogActionItem {
  id: ID;
  action: string;
  entityType: string;
  entityId: number;
  userId: number;
  createdAt: string;
  metadata: LogMetadata;
  user: GenUser;
}

export interface LogApiResponse {
  data: LogActionItem[];
  total?: number;
  page?: number;
  limit?: number;
}

export interface RoleRel {
  name: string;
  id: number ;
}

export interface Event {
  id: number;
  description: string;
  title: string;
  type: "HOLIDAY" | "EVENT";
  date: string;
  startTime: string;
  endTime: string;
  userId: number;
  createdAt: string;
  role: string;
  updatedAt: string;
  user: GenUser;
  roleRel: RoleRel;
}

export interface AuthResponse {
  access_token: string;
  user: AuthUser;
}

export interface AuthUser {
  id: ID;
  createdAt?: string;
  isActive: boolean;
  name: string;
  email: string;
  profile: string;
  password: string;
  confirmPassword: string;
  confirm_pass: string;
}

export interface Service {
  id: ID;
  title: string;
  description: string;
  serviceNo: string;
  unit: string;
  price?: string;
  contractId?: number;
}

export interface PaginatedServiceResponse<T> {
  services: T[];
  meta?: Meta;
}

export interface SubJob {
  id: number;
  baFaId?: string | null;
  smOrderTCom?: string | null;
  projectId?: number | null;
  projectIntId?: number | null;
  contractId?: number | null;
  orderNumberAg?: string | null;
  status?: string | null;
  currentGroup?: string | null;
  currentProcessor?: string | null;
  partialOrderCaseTi?: string | null;
  orderShortDescription?: string | null;
  commissioningDepartment?: string | null;
  orderReceiptDepartment?: string | null;
  baFaReadyForOperationCorrected?: string | null;
  technicallyComplete?: string | null;
  onkz?: string | null;
  asb?: string | null;
  lsz?: string | null;
  an?: string | null;
  ar?: string | null;
  al?: string | null;
  lszAdditional?: string | null;
  vpszA?: string | null;
  customerStreet?: string | null;
  customerHouseNumber?: string | null;
  customerAdditional?: string | null;
  customerPostalCode?: string | null;
  customerLocation?: string | null;
  assemblyAStreet?: string | null;
  assemblyBHouseNumber?: string | null;
  assemblyAHouseNumber?: string | null;
  assemblyAAdditionalStreet?: string | null;
  assemblyAPostalCode?: string | null;
  assemblyALocation?: string | null;
  assemblyABuildingPart?: string | null;
  assemblyABuildingAdditional?: string | null;
  assemblyARoom?: string | null;
  internalDepartmentNotes?: string | null;
  noteOnFa?: string | null;
  longTextNotePreviousSystem?: string | null;
  endSz?: string | null;
  fszA?: string | null;
  relevanceAaFa?: string | null;
  baFaReadyForOperation?: string | null;
  baFaCompleted?: string | null;
  cancellationFlag?: string | null;
  lastProcessor?: string | null;
  smOrderManually?: string | null;
  orderCaseTi?: string | null;
  agbTargetDateKwt?: string | null;
  parentId?: number | null;
  promotedFromId?: number | null;
  statusTwoRef?: string | null;
  isFavourite?: boolean;
  category?: string[];
  createdAt: string;
  updatedAt: string;
  subJobs: SubJob[];
}

export interface Job {
  id: number;
  baFaId: string | null;
  smOrderTCom: string | null;
  projectId: number | null;
  projectIntId: number | null;
  contractId: number | null;
  orderNumberAg: string | null;
  status: string;
  currentGroup: string;
  currentProcessor: string;
  partialOrderCaseTi: string;
  orderShortDescription: string;
  commissioningDepartment: string;
  orderReceiptDepartment: string;
  baFaReadyForOperationCorrected: string | null;
  technicallyComplete: string;
  onkz: string;
  asb: string;
  lsz: string;
  an: string | null;
  ar: string | null;
  al: string | null;
  lszAdditional: string;
  vpszA: string;
  customerStreet: string;
  customerHouseNumber: string;
  customerAdditional: string;
  customerPostalCode: string;
  customerLocation: string;
  assemblyAStreet: string;
  assemblyBHouseNumber: string;
  assemblyAHouseNumber: string;
  assemblyAAdditionalStreet: string;
  assemblyAPostalCode: string;
  assemblyALocation: string;
  assemblyABuildingPart: string;
  assemblyABuildingAdditional: string;
  assemblyARoom: string;
  internalDepartmentNotes: string;
  noteOnFa: string;
  longTextNotePreviousSystem: string;
  endSz: string;
  fszA: string;
  relevanceAaFa: string;
  baFaReadyForOperation: string;
  baFaCompleted: string;
  cancellationFlag: string;
  lastProcessor: string;
  smOrderManually: string;
  orderCaseTi: string;
  agbTargetDateKwt: string;
  parentId: number | null;
  promotedFromId: number | null;
  statusTwoRef: string | null;
  isFavourite: boolean;
  category: any[];
  createdAt: string;
  updatedAt: string;
  subJobs: SubJob[];
}

export interface JobData {
  jobs: Job[];
  meta: Meta;
}
