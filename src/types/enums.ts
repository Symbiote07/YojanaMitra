/**
 * Common enums used across the YojanaMitra application
 * These provide type-safe constants for categorical data
 */

/**
 * Categories of government schemes available in the system
 */
export enum SchemeCategory {
  EDUCATION = 'EDUCATION',
  HEALTHCARE = 'HEALTHCARE',
  AGRICULTURE = 'AGRICULTURE',
  HOUSING = 'HOUSING',
  FINANCE = 'FINANCE',
  BUSINESS = 'BUSINESS',
  EMPLOYMENT = 'EMPLOYMENT',
  SOCIAL_WELFARE = 'SOCIAL_WELFARE',
  WOMEN_EMPOWERMENT = 'WOMEN_EMPOWERMENT',
  RURAL_DEVELOPMENT = 'RURAL_DEVELOPMENT',
}

/**
 * Application status tracking
 */
export enum ApplicationStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  WITHDRAWN = 'WITHDRAWN',
  PENDING_DOCUMENTS = 'PENDING_DOCUMENTS',
}

/**
 * User roles in the system
 */
export enum UserRole {
  CITIZEN = 'CITIZEN',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

/**
 * Gender options
 */
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY',
}

/**
 * Social categories as per Indian government classification
 */
export enum SocialCategory {
  GENERAL = 'GENERAL',
  OBC = 'OBC',
  SC = 'SC',
  ST = 'ST',
  EWS = 'EWS',
}

/**
 * States and Union Territories of India
 */
export enum IndianState {
  ANDHRA_PRADESH = 'ANDHRA_PRADESH',
  ARUNACHAL_PRADESH = 'ARUNACHAL_PRADESH',
  ASSAM = 'ASSAM',
  BIHAR = 'BIHAR',
  CHHATTISGARH = 'CHHATTISGARH',
  GOA = 'GOA',
  GUJARAT = 'GUJARAT',
  HARYANA = 'HARYANA',
  HIMACHAL_PRADESH = 'HIMACHAL_PRADESH',
  JHARKHAND = 'JHARKHAND',
  KARNATAKA = 'KARNATAKA',
  KERALA = 'KERALA',
  MADHYA_PRADESH = 'MADHYA_PRADESH',
  MAHARASHTRA = 'MAHARASHTRA',
  MANIPUR = 'MANIPUR',
  MEGHALAYA = 'MEGHALAYA',
  MIZORAM = 'MIZORAM',
  NAGALAND = 'NAGALAND',
  ODISHA = 'ODISHA',
  PUNJAB = 'PUNJAB',
  RAJASTHAN = 'RAJASTHAN',
  SIKKIM = 'SIKKIM',
  TAMIL_NADU = 'TAMIL_NADU',
  TELANGANA = 'TELANGANA',
  TRIPURA = 'TRIPURA',
  UTTAR_PRADESH = 'UTTAR_PRADESH',
  UTTARAKHAND = 'UTTARAKHAND',
  WEST_BENGAL = 'WEST_BENGAL',
  // Union Territories
  ANDAMAN_NICOBAR = 'ANDAMAN_NICOBAR',
  CHANDIGARH = 'CHANDIGARH',
  DADRA_NAGAR_HAVELI_DAMAN_DIU = 'DADRA_NAGAR_HAVELI_DAMAN_DIU',
  DELHI = 'DELHI',
  JAMMU_KASHMIR = 'JAMMU_KASHMIR',
  LADAKH = 'LADAKH',
  LAKSHADWEEP = 'LAKSHADWEEP',
  PUDUCHERRY = 'PUDUCHERRY',
}

/**
 * Employment status of a user
 */
export enum EmploymentStatus {
  EMPLOYED = 'EMPLOYED',
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  UNEMPLOYED = 'UNEMPLOYED',
  STUDENT = 'STUDENT',
  RETIRED = 'RETIRED',
  HOMEMAKER = 'HOMEMAKER',
}

/**
 * Education qualification levels
 */
export enum EducationLevel {
  NO_FORMAL_EDUCATION = 'NO_FORMAL_EDUCATION',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  HIGHER_SECONDARY = 'HIGHER_SECONDARY',
  UNDERGRADUATE = 'UNDERGRADUATE',
  POSTGRADUATE = 'POSTGRADUATE',
  DOCTORATE = 'DOCTORATE',
  DIPLOMA = 'DIPLOMA',
  PROFESSIONAL_DEGREE = 'PROFESSIONAL_DEGREE',
}

/**
 * Marital status options
 */
export enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
}
