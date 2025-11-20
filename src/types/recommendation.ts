/**
 * Recommendation engine types for personalized scheme suggestions
 */

import { SchemeSummary } from './scheme';
import { EligibilityCheckResult } from './eligibility';
import { SchemeCategory } from './enums';

/**
 * Reasons why a scheme was recommended
 */
export type RecommendationReason =
  | { type: 'HIGH_ELIGIBILITY'; score: number; description: string }
  | { type: 'PERFECT_MATCH'; matchedCriteria: string[]; description: string }
  | { type: 'POPULAR_IN_CATEGORY'; category: SchemeCategory; description: string }
  | { type: 'POPULAR_IN_LOCATION'; location: string; description: string }
  | { type: 'EXPIRING_SOON'; daysRemaining: number; description: string }
  | { type: 'HIGH_BENEFIT'; benefitAmount: number; description: string }
  | { type: 'USER_PREFERENCE'; preferredCategory: SchemeCategory; description: string }
  | { type: 'SIMILAR_TO_APPLIED'; schemeId: string; description: string }
  | { type: 'AI_SUGGESTED'; confidence: number; description: string }
  | { type: 'TRENDING'; trendScore: number; description: string };

/**
 * Single scheme recommendation with metadata
 */
export interface SchemeRecommendation {
  /** The recommended scheme */
  scheme: SchemeSummary;

  /** Overall recommendation score (0-100) */
  score: number;

  /** Eligibility check result for this user */
  eligibility: EligibilityCheckResult;

  /** Reasons for recommendation */
  reasons: RecommendationReason[];

  /** Priority level */
  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  /** Whether user has already applied */
  alreadyApplied: boolean;

  /** Whether user has saved this scheme */
  saved: boolean;

  /** Estimated benefit amount if applicable */
  estimatedBenefit?: number;

  /** Action items for the user */
  actionItems?: string[];

  /** Next steps to apply */
  nextSteps?: string[];
}

/**
 * Complete recommendation result for a user
 */
export interface RecommendationResult {
  /** User ID for whom recommendations are generated */
  userId: string;

  /** List of recommended schemes */
  recommendations: SchemeRecommendation[];

  /** Total number of eligible schemes found */
  totalEligibleSchemes: number;

  /** Breakdown by category */
  categoryBreakdown: {
    category: SchemeCategory;
    count: number;
    topScheme?: SchemeSummary;
  }[];

  /** Recommendation metadata */
  metadata: {
    /** When recommendations were generated */
    generatedAt: Date;

    /** Algorithm version used */
    algorithmVersion: string;

    /** User profile completeness at time of generation */
    profileCompleteness: number;

    /** Whether recommendations include AI suggestions */
    includesAISuggestions: boolean;

    /** Total processing time in milliseconds */
    processingTimeMs: number;
  };

  /** Personalized insights for the user */
  insights?: {
    /** Missing profile information that affects recommendations */
    missingProfileInfo?: string[];

    /** Suggestions to improve eligibility */
    eligibilityTips?: string[];

    /** Schemes that are almost eligible */
    almostEligible?: {
      scheme: SchemeSummary;
      missingCriteria: string[];
      howToQualify: string[];
    }[];

    /** Popular schemes in user's area */
    popularInYourArea?: SchemeSummary[];

    /** Schemes expiring soon */
    expiringSoon?: {
      scheme: SchemeSummary;
      daysRemaining: number;
    }[];
  };

  /** Refresh indicator */
  stale: boolean;

  /** Refresh recommendations after this date */
  refreshAfter: Date;
}

/**
 * Recommendation preferences to customize results
 */
export interface RecommendationPreferences {
  /** Categories to prioritize */
  priorityCategories?: SchemeCategory[];

  /** Categories to exclude */
  excludedCategories?: SchemeCategory[];

  /** Include schemes with low eligibility scores */
  includeAlmostEligible: boolean;

  /** Minimum eligibility score to include (0-100) */
  minEligibilityScore: number;

  /** Maximum number of recommendations */
  maxRecommendations: number;

  /** Whether to include AI suggestions */
  includeAISuggestions: boolean;

  /** Sort preference */
  sortBy: 'SCORE' | 'BENEFIT_AMOUNT' | 'DEADLINE' | 'POPULARITY';
}

/**
 * Recommendation feedback from user
 */
export interface RecommendationFeedback {
  /** Recommendation ID */
  recommendationId: string;

  /** User ID */
  userId: string;

  /** Scheme ID */
  schemeId: string;

  /** Was this recommendation helpful? */
  helpful: boolean;

  /** User action taken */
  action: 'APPLIED' | 'SAVED' | 'DISMISSED' | 'SHARED' | 'NONE';

  /** User rating (1-5) */
  rating?: number;

  /** User comments */
  comments?: string;

  /** Timestamp */
  timestamp: Date;
}

/**
 * Recommendation analytics for insights
 */
export interface RecommendationAnalytics {
  /** Total recommendations generated */
  totalRecommendations: number;

  /** Conversion rate (applications / recommendations) */
  conversionRate: number;

  /** Average eligibility score */
  averageEligibilityScore: number;

  /** Most recommended categories */
  topCategories: {
    category: SchemeCategory;
    count: number;
    conversionRate: number;
  }[];

  /** Most applied schemes from recommendations */
  topConvertingSchemes: {
    schemeId: string;
    schemeName: string;
    recommendationCount: number;
    applicationCount: number;
    conversionRate: number;
  }[];

  /** User engagement metrics */
  engagement: {
    averageRecommendationsViewed: number;
    averageTimeSpentSeconds: number;
    saveRate: number;
    dismissRate: number;
  };
}
