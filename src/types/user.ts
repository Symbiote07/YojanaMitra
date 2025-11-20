/**
 * User profile and authentication types
 */

import {
  Gender,
  SocialCategory,
  IndianState,
  EmploymentStatus,
  EducationLevel,
  MaritalStatus,
  UserRole,
} from './enums';
import { IncomeBand, AgeRange, DisabilityStatus, ResidenceType } from './eligibility';

/**
 * Address information
 */
export interface Address {
  /** Street address line 1 */
  line1: string;

  /** Street address line 2 (optional) */
  line2?: string;

  /** City name */
  city: string;

  /** State or Union Territory */
  state: IndianState;

  /** PIN code */
  pinCode: string;

  /** District name */
  district?: string;

  /** Residence type derived from location */
  residenceType: ResidenceType;
}

/**
 * Document information for KYC and verification
 */
export interface UserDocument {
  /** Document type (e.g., 'AADHAAR', 'PAN', 'VOTER_ID') */
  type: string;

  /** Document number */
  number: string;

  /** Document verification status */
  verified: boolean;

  /** Upload URL if document file is uploaded */
  fileUrl?: string;

  /** Expiry date for documents that expire */
  expiryDate?: Date;

  /** Uploaded at timestamp */
  uploadedAt: Date;
}

/**
 * User's household information
 */
export interface HouseholdInfo {
  /** Total family members */
  familySize: number;

  /** Number of dependents */
  dependents: number;

  /** Total annual household income (in INR) */
  annualIncome: number;

  /** Derived income band */
  incomeBand: IncomeBand;

  /** Whether household is Below Poverty Line */
  isBPL: boolean;

  /** Ration card type if applicable */
  rationCardType?: 'APL' | 'BPL' | 'AAY' | 'NONE';
}

/**
 * User's educational background
 */
export interface EducationInfo {
  /** Highest education level */
  level: EducationLevel;

  /** Field of study */
  fieldOfStudy?: string;

  /** Institution name */
  institution?: string;

  /** Year of completion */
  yearOfCompletion?: number;

  /** Currently studying */
  isCurrentlyStudying: boolean;
}

/**
 * User's employment details
 */
export interface EmploymentInfo {
  /** Employment status */
  status: EmploymentStatus;

  /** Occupation/job title */
  occupation?: string;

  /** Employer name */
  employer?: string;

  /** Annual income from employment */
  annualIncome?: number;

  /** Years of experience */
  yearsOfExperience?: number;

  /** Industry/sector */
  sector?: string;
}

/**
 * Disability information if applicable
 */
export interface DisabilityInfo {
  /** Disability status */
  status: DisabilityStatus;

  /** Type of disability */
  type?: string;

  /** Certificate number */
  certificateNumber?: string;

  /** Issuing authority */
  issuingAuthority?: string;

  /** Certificate issue date */
  issueDate?: Date;
}

/**
 * Bank account information for scheme benefits
 */
export interface BankAccountInfo {
  /** Account holder name */
  accountHolderName: string;

  /** Bank account number */
  accountNumber: string;

  /** IFSC code */
  ifscCode: string;

  /** Bank name */
  bankName: string;

  /** Branch name */
  branchName?: string;

  /** Whether account is verified */
  verified: boolean;
}

/**
 * Complete user profile with all personal and eligibility information
 */
export interface UserProfile {
  /** Unique user identifier */
  id: string;

  /** Email address (for authentication) */
  email: string;

  /** User role in the system */
  role: UserRole;

  // Personal Information
  /** Full name */
  fullName: string;

  /** Date of birth */
  dateOfBirth: Date;

  /** Computed age for eligibility checks */
  age: number;

  /** Age range category */
  ageRange: AgeRange;

  /** Gender */
  gender: Gender;

  /** Phone number */
  phoneNumber: string;

  /** Alternate phone number */
  alternatePhoneNumber?: string;

  /** Social category */
  socialCategory: SocialCategory;

  /** Marital status */
  maritalStatus: MaritalStatus;

  // Location Information
  /** Current address */
  address: Address;

  /** Permanent address (if different) */
  permanentAddress?: Address;

  // Documentation
  /** User documents for verification */
  documents: UserDocument[];

  /** Aadhaar number (for uniqueness) */
  aadhaarNumber?: string;

  /** PAN number (for financial schemes) */
  panNumber?: string;

  // Family and Income
  /** Household information */
  household: HouseholdInfo;

  // Education
  /** Education information */
  education: EducationInfo;

  // Employment
  /** Employment information */
  employment: EmploymentInfo;

  // Disability
  /** Disability information if applicable */
  disability?: DisabilityInfo;

  // Banking
  /** Bank account for receiving benefits */
  bankAccount?: BankAccountInfo;

  // Preferences
  /** Preferred language */
  preferredLanguage: 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr' | 'gu' | 'kn' | 'ml' | 'or' | 'pa' | 'ur';

  /** Preferred scheme categories for recommendations */
  preferredCategories?: string[];

  /** Whether to receive notifications */
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };

  // Metadata
  /** Profile completion percentage */
  profileCompleteness: number;

  /** Account creation date */
  createdAt: Date;

  /** Last profile update date */
  updatedAt: Date;

  /** Last login date */
  lastLoginAt?: Date;

  /** Whether profile is verified */
  verified: boolean;

  /** KYC completion status */
  kycCompleted: boolean;
}

/**
 * Partial user profile for registration (minimal required fields)
 */
export interface UserRegistration {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  gender: Gender;
  state: IndianState;
}

/**
 * User authentication token payload
 */
export interface AuthToken {
  userId: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}

/**
 * User session information
 */
export interface UserSession {
  user: UserProfile;
  token: string;
  expiresAt: Date;
}
