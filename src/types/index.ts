/**
 * Central export for all TypeScript types and interfaces
 * This provides a single import point for type definitions across the application
 */

// Enums
export {
  SchemeCategory,
  ApplicationStatus,
  UserRole,
  Gender,
  SocialCategory,
  IndianState,
  EmploymentStatus,
  EducationLevel,
  MaritalStatus,
} from './enums';

// Eligibility types
export type {
  IncomeBand,
  AgeRange,
  DisabilityStatus,
  ResidenceType,
  SchemeEligibility,
  EligibilityCheckResult,
} from './eligibility';

// User types
export type {
  Address,
  UserDocument,
  HouseholdInfo,
  EducationInfo,
  EmploymentInfo,
  DisabilityInfo,
  BankAccountInfo,
  UserProfile,
  UserRegistration,
  AuthToken,
  UserSession,
} from './user';

// Scheme types
export type {
  RequiredDocument,
  SchemeBenefit,
  ApplicationDeadline,
  GovernmentScheme,
  SchemeSummary,
  SchemeFilters,
  SchemeSearchResult,
} from './scheme';

// Recommendation types
export type {
  RecommendationReason,
  SchemeRecommendation,
  RecommendationResult,
  RecommendationPreferences,
  RecommendationFeedback,
  RecommendationAnalytics,
} from './recommendation';

// Application types
export type {
  UploadedDocument,
  ApplicationFormData,
  ApplicationReview,
  ApplicationStatusHistory,
  ApplicationNotificationSettings,
  SchemeApplication,
  ApplicationSummary,
  ApplicationFilters,
  ApplicationStatistics,
  DraftApplication,
} from './application';
