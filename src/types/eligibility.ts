/**
 * Eligibility criteria types using discriminated unions
 * These provide type-safe representations of various eligibility conditions
 */

import {
  Gender,
  SocialCategory,
  IndianState,
  EmploymentStatus,
  EducationLevel,
  MaritalStatus,
} from './enums';

/**
 * Discriminated union for income-based eligibility
 * Uses income bands to categorize users
 */
export type IncomeBand =
  | { type: 'BELOW_POVERTY_LINE'; maxIncome: 0 }
  | { type: 'LOW_INCOME'; minIncome: 0; maxIncome: 100000 }
  | { type: 'LOWER_MIDDLE_INCOME'; minIncome: 100001; maxIncome: 300000 }
  | { type: 'MIDDLE_INCOME'; minIncome: 300001; maxIncome: 600000 }
  | { type: 'UPPER_MIDDLE_INCOME'; minIncome: 600001; maxIncome: 1000000 }
  | { type: 'HIGH_INCOME'; minIncome: 1000001; maxIncome: 2000000 }
  | { type: 'VERY_HIGH_INCOME'; minIncome: 2000001 }
  | { type: 'NO_INCOME_LIMIT'; description: 'No income restriction' };

/**
 * Discriminated union for age-based eligibility
 */
export type AgeRange =
  | { type: 'CHILD'; minAge: 0; maxAge: 17; description: 'Children and minors' }
  | { type: 'YOUNG_ADULT'; minAge: 18; maxAge: 35; description: 'Young adults' }
  | { type: 'ADULT'; minAge: 36; maxAge: 59; description: 'Adults' }
  | { type: 'SENIOR_CITIZEN'; minAge: 60; description: 'Senior citizens' }
  | { type: 'SPECIFIC_AGE'; minAge: number; maxAge: number; description: string }
  | { type: 'NO_AGE_LIMIT'; description: 'All ages eligible' };

/**
 * Discriminated union for disability-based eligibility
 */
export type DisabilityStatus =
  | { type: 'NO_DISABILITY'; description: 'No disability' }
  | { type: 'MILD_DISABILITY'; percentage: { min: 40; max: 49 } }
  | { type: 'MODERATE_DISABILITY'; percentage: { min: 50; max: 74 } }
  | { type: 'SEVERE_DISABILITY'; percentage: { min: 75; max: 100 } }
  | { type: 'ANY_DISABILITY'; percentage: { min: 40 }; description: 'Any certified disability' };

/**
 * Discriminated union for residence-based eligibility
 */
export type ResidenceType =
  | { type: 'RURAL'; description: 'Rural area residents' }
  | { type: 'URBAN'; description: 'Urban area residents' }
  | { type: 'SEMI_URBAN'; description: 'Semi-urban area residents' }
  | { type: 'ANY'; description: 'All residence types' };

/**
 * Complete eligibility criteria for a scheme
 */
export interface SchemeEligibility {
  /** Unique identifier for the eligibility criteria */
  id: string;

  /** Scheme ID this eligibility is for */
  schemeId: string;

  /** Age range eligibility */
  ageRange: AgeRange;

  /** Income band eligibility */
  incomeBand: IncomeBand;

  /** Gender eligibility (undefined means all genders) */
  gender?: Gender | Gender[];

  /** Social category eligibility (undefined means all categories) */
  socialCategory?: SocialCategory | SocialCategory[];

  /** State/UT eligibility (undefined means all states) */
  states?: IndianState | IndianState[];

  /** Residence type eligibility */
  residenceType: ResidenceType;

  /** Employment status eligibility (undefined means all statuses) */
  employmentStatus?: EmploymentStatus | EmploymentStatus[];

  /** Education level eligibility (undefined means all levels) */
  educationLevel?: EducationLevel | EducationLevel[];

  /** Marital status eligibility (undefined means all statuses) */
  maritalStatus?: MaritalStatus | MaritalStatus[];

  /** Disability status eligibility */
  disabilityStatus?: DisabilityStatus;

  /** Additional custom criteria (flexible for scheme-specific requirements) */
  additionalCriteria?: {
    key: string;
    value: string | number | boolean;
    description: string;
  }[];

  /** Whether all criteria must be met (AND) or any criteria (OR) */
  matchType: 'ALL' | 'ANY';

  /** Human-readable description of eligibility */
  description: string;

  /** Last updated timestamp */
  updatedAt: Date;
}

/**
 * Eligibility check result with detailed breakdown
 */
export interface EligibilityCheckResult {
  /** Whether the user is eligible */
  isEligible: boolean;

  /** Confidence score (0-100) */
  confidenceScore: number;

  /** Matched criteria */
  matchedCriteria: string[];

  /** Unmatched criteria */
  unmatchedCriteria: string[];

  /** Reasons for eligibility or ineligibility */
  reasons: string[];

  /** Suggestions to become eligible (if not eligible) */
  suggestions?: string[];
}
