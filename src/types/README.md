# TypeScript Domain Models

This directory contains strongly-typed domain models for the YojanaMitra application. These types provide type safety, improved developer experience, and reduced runtime errors.

## 📁 File Structure

### `enums.ts`
Contains all enum types used across the application:
- **SchemeCategory**: Categories of government schemes (Education, Healthcare, etc.)
- **ApplicationStatus**: Workflow states for applications
- **UserRole**: User access levels (Citizen, Admin, Moderator)
- **Gender**: Gender options with inclusive choices
- **SocialCategory**: Indian government social classifications
- **IndianState**: All states and union territories
- **EmploymentStatus**: Employment classifications
- **EducationLevel**: Education qualification levels
- **MaritalStatus**: Marital status options

### `eligibility.ts`
Contains discriminated unions for type-safe eligibility criteria:
- **IncomeBand**: Type-safe income ranges with specific bands (BPL, Low Income, etc.)
- **AgeRange**: Type-safe age classifications (Child, Young Adult, Senior Citizen, etc.)
- **DisabilityStatus**: Disability categories with percentage ranges
- **ResidenceType**: Rural/Urban/Semi-urban classifications
- **SchemeEligibility**: Complete eligibility criteria for schemes
- **EligibilityCheckResult**: Result of eligibility verification

### `user.ts`
Complete user profile modeling:
- **UserProfile**: Comprehensive user information including personal, demographic, and eligibility data
- **Address**: Structured address information
- **UserDocument**: KYC document tracking
- **HouseholdInfo**: Family and income information
- **EducationInfo**: Educational background
- **EmploymentInfo**: Employment details
- **DisabilityInfo**: Disability certification
- **BankAccountInfo**: Banking details for benefits
- **UserRegistration**: Minimal registration data
- **AuthToken**: JWT token payload
- **UserSession**: Active session information

### `scheme.ts`
Government scheme structures:
- **GovernmentScheme**: Complete scheme information with all details
- **SchemeSummary**: Lightweight scheme data for listings
- **RequiredDocument**: Document requirements for applications
- **SchemeBenefit**: Benefit details (financial, subsidy, service)
- **ApplicationDeadline**: Deadline and application period information
- **SchemeFilters**: Search and filter criteria
- **SchemeSearchResult**: Paginated search results

### `recommendation.ts`
Personalized recommendation system:
- **RecommendationResult**: Complete recommendation output with schemes ranked by relevance
- **SchemeRecommendation**: Individual scheme recommendation with scoring
- **RecommendationReason**: Discriminated union explaining why a scheme was recommended
- **RecommendationPreferences**: User preferences for customization
- **RecommendationFeedback**: User feedback tracking
- **RecommendationAnalytics**: Performance metrics

### `application.ts`
Application submission and tracking:
- **SchemeApplication**: Complete application with all lifecycle information
- **ApplicationSummary**: Lightweight application data for listings
- **UploadedDocument**: Document management
- **ApplicationReview**: Admin review tracking
- **ApplicationStatusHistory**: Status change audit trail
- **ApplicationFilters**: Search and filter options
- **ApplicationStatistics**: Analytics and metrics
- **DraftApplication**: Saved but unsubmitted applications

### `index.ts`
Central export point - import all types from this single file:
```typescript
import { UserProfile, SchemeEligibility, RecommendationResult } from '@/types';
```

## 🎯 Key Features

### 1. Discriminated Unions
Type-safe categorical data using discriminated unions for:
- **Income Bands**: Prevents invalid income ranges
- **Age Ranges**: Ensures proper age categorization
- **Disability Status**: Type-safe disability classifications
- **Recommendation Reasons**: Strongly typed recommendation explanations

Example:
```typescript
const incomeBand: IncomeBand = {
  type: 'LOW_INCOME',
  minIncome: 0,
  maxIncome: 100000
};

// TypeScript ensures proper structure for each band type
```

### 2. Comprehensive Validation
All types include:
- Required vs optional fields
- Nested object structures
- Array types where appropriate
- Date types for temporal data
- Numeric constraints via type guards

### 3. Flexibility with Type Safety
- JSONB-like `ApplicationFormData` for dynamic form fields
- Optional fields for incomplete data
- Union types for multiple possibilities
- Enums for controlled vocabularies

### 4. Audit Trail
Many types include:
- `createdAt` / `updatedAt` timestamps
- Status history tracking
- Change attribution (`changedBy`)
- Version information

## 💡 Usage Examples

### Working with User Profiles
```typescript
import { UserProfile, Gender, IndianState, SocialCategory } from '@/types';

const user: UserProfile = {
  id: '123',
  email: 'user@example.com',
  role: UserRole.CITIZEN,
  fullName: 'John Doe',
  dateOfBirth: new Date('1990-01-01'),
  age: 33,
  ageRange: { type: 'ADULT', minAge: 36, maxAge: 59, description: 'Adults' },
  gender: Gender.MALE,
  phoneNumber: '+919876543210',
  socialCategory: SocialCategory.GENERAL,
  maritalStatus: MaritalStatus.SINGLE,
  address: {
    line1: '123 Main St',
    city: 'Mumbai',
    state: IndianState.MAHARASHTRA,
    pinCode: '400001',
    residenceType: { type: 'URBAN', description: 'Urban area residents' }
  },
  // ... more fields
};
```

### Working with Eligibility Criteria
```typescript
import { SchemeEligibility, IncomeBand, AgeRange } from '@/types';

const eligibility: SchemeEligibility = {
  id: 'elig-123',
  schemeId: 'scheme-456',
  ageRange: {
    type: 'YOUNG_ADULT',
    minAge: 18,
    maxAge: 35,
    description: 'Young adults'
  },
  incomeBand: {
    type: 'LOW_INCOME',
    minIncome: 0,
    maxIncome: 100000
  },
  residenceType: { type: 'RURAL', description: 'Rural area residents' },
  matchType: 'ALL',
  description: 'For young adults from low-income rural families',
  updatedAt: new Date()
};
```

### Working with Recommendations
```typescript
import { RecommendationResult, RecommendationReason } from '@/types';

const recommendations: RecommendationResult = {
  userId: 'user-123',
  recommendations: [
    {
      scheme: schemeSummary,
      score: 95,
      eligibility: {
        isEligible: true,
        confidenceScore: 98,
        matchedCriteria: ['Age', 'Income', 'Location'],
        unmatchedCriteria: [],
        reasons: ['Perfect match for all criteria']
      },
      reasons: [
        {
          type: 'PERFECT_MATCH',
          matchedCriteria: ['Age', 'Income', 'Location'],
          description: 'You meet all eligibility criteria'
        }
      ],
      priority: 'HIGH',
      alreadyApplied: false,
      saved: false
    }
  ],
  totalEligibleSchemes: 10,
  categoryBreakdown: [
    { category: SchemeCategory.EDUCATION, count: 5 },
    { category: SchemeCategory.HEALTHCARE, count: 5 }
  ],
  metadata: {
    generatedAt: new Date(),
    algorithmVersion: '1.0',
    profileCompleteness: 85,
    includesAISuggestions: true,
    processingTimeMs: 150
  },
  stale: false,
  refreshAfter: new Date(Date.now() + 24 * 60 * 60 * 1000)
};
```

## 🔍 Type Coverage

To check type coverage in your code:

```bash
# Check for TypeScript compilation errors
npm run build

# Or use tsc directly
npx tsc --noEmit

# For detailed type checking
npx tsc --noEmit --pretty
```

## 📊 Benefits

### 1. Reduced Runtime Errors
Strong typing catches errors at compile time:
- Invalid enum values
- Missing required fields
- Type mismatches
- Incorrect data structures

### 2. Better Developer Experience
- IntelliSense autocompletion
- Inline documentation
- Refactoring support
- Navigate to definition

### 3. Self-Documenting Code
Types serve as documentation:
- Clear data structures
- Required vs optional fields
- Valid value ranges
- Relationships between types

### 4. Easier Refactoring
TypeScript ensures:
- All usages are updated
- Breaking changes are caught
- API contracts are maintained

## 🚀 Best Practices

### 1. Use Discriminated Unions for Variants
```typescript
// Good: Type-safe with discriminator
type IncomeBand = 
  | { type: 'LOW_INCOME'; minIncome: 0; maxIncome: 100000 }
  | { type: 'HIGH_INCOME'; minIncome: 1000001; maxIncome: 2000000 };

// Avoid: Loose typing
interface IncomeBand {
  type: string;
  minIncome?: number;
  maxIncome?: number;
}
```

### 2. Make Optional Fields Explicit
```typescript
// Good: Clear what's required vs optional
interface UserProfile {
  id: string;           // Required
  email: string;        // Required
  nickname?: string;    // Optional
}
```

### 3. Use Enums for Constants
```typescript
// Good: Type-safe constants
enum ApplicationStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED'
}

// Avoid: String literals everywhere
const status: string = 'DRAFT';
```

### 4. Leverage Type Utilities
```typescript
// Pick specific fields
type SchemeSummary = Pick<GovernmentScheme, 'id' | 'name' | 'category'>;

// Make all fields optional
type PartialUser = Partial<UserProfile>;

// Make all fields required
type RequiredFilters = Required<SchemeFilters>;
```

## 🔄 Migration Guide

To adopt these types in existing code:

1. Import types at the top of your file:
```typescript
import { UserProfile, SchemeEligibility, RecommendationResult } from '@/types';
```

2. Add type annotations to variables and parameters:
```typescript
function getUser(id: string): UserProfile {
  // ...
}

const schemes: GovernmentScheme[] = [];
```

3. Use discriminated unions for conditional logic:
```typescript
function getIncomeDescription(band: IncomeBand): string {
  switch (band.type) {
    case 'LOW_INCOME':
      return `₹${band.minIncome} - ₹${band.maxIncome}`;
    case 'NO_INCOME_LIMIT':
      return band.description;
    // TypeScript ensures all cases are handled
  }
}
```

## 📝 Contributing

When adding new types:
1. Add to the appropriate file based on domain
2. Include JSDoc comments for documentation
3. Use discriminated unions for variants
4. Export from `index.ts`
5. Update this README with examples
6. Run `npm run lint` to ensure code quality
7. Run `npx tsc --noEmit` to verify type safety

## 🔗 Related Documentation

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
