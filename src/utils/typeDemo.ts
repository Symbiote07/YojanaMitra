/**
 * Simple demonstration of using the new type system
 * This file shows how the types can be imported and used in the application
 */

import {
  UserProfile,
  SchemeEligibility,
  RecommendationResult,
  SchemeCategory,
} from '../types';

/**
 * Type guard to check if a user profile is complete
 */
export function isProfileComplete(profile: UserProfile): boolean {
  return profile.profileCompleteness >= 100 && profile.kycCompleted;
}

/**
 * Type-safe function to get user's primary category interest
 */
export function getPrimaryInterest(profile: UserProfile): SchemeCategory | undefined {
  return profile.preferredCategories?.[0] as SchemeCategory | undefined;
}

/**
 * Type-safe function to check if user can apply for a scheme
 */
export function canApply(
  user: UserProfile,
  eligibility: SchemeEligibility
): boolean {
  // Age check
  const ageInRange = user.age >= (eligibility.ageRange.type !== 'NO_AGE_LIMIT' ? 
    'minAge' in eligibility.ageRange ? eligibility.ageRange.minAge : 0 : 0);

  // Gender check
  const genderMatch = !eligibility.gender || 
    (Array.isArray(eligibility.gender) 
      ? eligibility.gender.includes(user.gender)
      : eligibility.gender === user.gender);

  return ageInRange && genderMatch;
}

/**
 * Get high-priority recommendations from a result
 */
export function getHighPriorityRecommendations(
  result: RecommendationResult
) {
  return result.recommendations.filter(rec => rec.priority === 'HIGH');
}

// Example usage (for demonstration - not executed at runtime)
if (import.meta.env.DEV) {
  console.log('Type system loaded successfully');
}
