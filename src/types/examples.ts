/**
 * Example usage of YojanaMitra domain types
 * This file demonstrates how to use the strongly-typed models
 * 
 * Note: This file is for documentation purposes and is not imported in the application
 */

import {
  UserProfile,
  SchemeEligibility,
  RecommendationResult,
  GovernmentScheme,
  SchemeApplication,
  // Enums
  Gender,
  SocialCategory,
  IndianState,
  UserRole,
  MaritalStatus,
  EmploymentStatus,
  EducationLevel,
  SchemeCategory,
  ApplicationStatus,
} from './index';

/**
 * Example 1: Creating a user profile with strong typing
 */
export function exampleUserProfile(): UserProfile {
  return {
    id: 'user-123',
    email: 'ramesh.kumar@example.com',
    role: UserRole.CITIZEN,
    fullName: 'Ramesh Kumar',
    dateOfBirth: new Date('1992-05-15'),
    age: 31,
    ageRange: {
      type: 'ADULT',
      minAge: 36,
      maxAge: 59,
      description: 'Adults'
    },
    gender: Gender.MALE,
    phoneNumber: '+919876543210',
    socialCategory: SocialCategory.OBC,
    maritalStatus: MaritalStatus.MARRIED,
    address: {
      line1: '123, Gandhi Road',
      line2: 'Near City Hospital',
      city: 'Pune',
      state: IndianState.MAHARASHTRA,
      pinCode: '411001',
      district: 'Pune',
      residenceType: {
        type: 'URBAN',
        description: 'Urban area residents'
      }
    },
    documents: [
      {
        type: 'AADHAAR',
        number: '1234-5678-9012',
        verified: true,
        uploadedAt: new Date('2024-01-15')
      },
      {
        type: 'PAN',
        number: 'ABCDE1234F',
        verified: true,
        uploadedAt: new Date('2024-01-15')
      }
    ],
    household: {
      familySize: 4,
      dependents: 2,
      annualIncome: 250000,
      incomeBand: {
        type: 'LOWER_MIDDLE_INCOME',
        minIncome: 100001,
        maxIncome: 300000
      },
      isBPL: false,
      rationCardType: 'APL'
    },
    education: {
      level: EducationLevel.UNDERGRADUATE,
      fieldOfStudy: 'Computer Science',
      institution: 'Pune University',
      yearOfCompletion: 2014,
      isCurrentlyStudying: false
    },
    employment: {
      status: EmploymentStatus.EMPLOYED,
      occupation: 'Software Developer',
      employer: 'Tech Corp India',
      annualIncome: 250000,
      yearsOfExperience: 8,
      sector: 'Information Technology'
    },
    preferredLanguage: 'en',
    preferredCategories: [
      SchemeCategory.EDUCATION,
      SchemeCategory.HOUSING
    ],
    notifications: {
      email: true,
      sms: true,
      push: true
    },
    profileCompleteness: 95,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
    lastLoginAt: new Date('2024-01-20'),
    verified: true,
    kycCompleted: true
  };
}

/**
 * Example 2: Defining scheme eligibility with discriminated unions
 */
export function exampleSchemeEligibility(): SchemeEligibility {
  return {
    id: 'elig-456',
    schemeId: 'scheme-789',
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
    gender: Gender.FEMALE,  // Scheme specifically for women
    socialCategory: [SocialCategory.SC, SocialCategory.ST],  // Multiple categories eligible
    states: [IndianState.MAHARASHTRA, IndianState.KARNATAKA],
    residenceType: {
      type: 'RURAL',
      description: 'Rural area residents'
    },
    employmentStatus: EmploymentStatus.UNEMPLOYED,
    additionalCriteria: [
      {
        key: 'hasRationCard',
        value: true,
        description: 'Must have a valid ration card'
      }
    ],
    matchType: 'ALL',
    description: 'For young unemployed women from SC/ST communities in rural Maharashtra and Karnataka',
    updatedAt: new Date()
  };
}

/**
 * Example 3: Creating a government scheme with full details
 */
export function exampleGovernmentScheme(): GovernmentScheme {
  return {
    id: 'scheme-789',
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
    shortDescription: 'Skill development and training program for youth',
    description: 'PMKVY is the flagship scheme of the Ministry of Skill Development & Entrepreneurship (MSDE) implemented by National Skills Development Corporation. The objective of this Skill Certification Scheme is to enable a large number of Indian youth to take up industry-relevant skill training.',
    category: SchemeCategory.EMPLOYMENT,
    subCategory: 'Skill Development',
    managedBy: 'Ministry of Skill Development & Entrepreneurship',
    level: 'CENTRAL',
    eligibility: exampleSchemeEligibility(),
    benefits: [
      {
        type: 'TRAINING',
        description: 'Free skill training in various sectors',
        frequency: 'ONE_TIME'
      },
      {
        type: 'FINANCIAL',
        description: 'Monetary reward on assessment and certification',
        amount: 8000,
        frequency: 'ONE_TIME'
      },
      {
        type: 'CERTIFICATION',
        description: 'Government-certified skill qualification',
        frequency: 'ONE_TIME'
      }
    ],
    requiredDocuments: [
      {
        type: 'AADHAAR',
        name: 'Aadhaar Card',
        mandatory: true,
        description: 'Valid Aadhaar card for identity verification',
        acceptedFormats: ['PDF', 'JPG', 'PNG'],
        maxSizeMB: 2
      },
      {
        type: 'EDUCATION_CERTIFICATE',
        name: 'Educational Qualification Certificate',
        mandatory: false,
        description: '10th or 12th standard certificate',
        acceptedFormats: ['PDF'],
        maxSizeMB: 5
      }
    ],
    deadline: {
      hasDeadline: false,
      isOpen: true,
      description: 'Ongoing scheme - applications accepted throughout the year'
    },
    officialWebsite: 'https://www.pmkvyofficial.org',
    contactInfo: {
      email: 'pmkvy@nsdcindia.org',
      helpline: '1800-123-9626',
      address: 'NSDC, New Delhi'
    },
    applicationProcess: [
      {
        step: 1,
        title: 'Register Online',
        description: 'Visit the official PMKVY portal and complete registration'
      },
      {
        step: 2,
        title: 'Choose Training Center',
        description: 'Select a nearby training center from the list'
      },
      {
        step: 3,
        title: 'Select Course',
        description: 'Choose a skill development course of your interest'
      },
      {
        step: 4,
        title: 'Complete Training',
        description: 'Attend all training sessions and complete the course'
      },
      {
        step: 5,
        title: 'Appear for Assessment',
        description: 'Take the certification assessment exam'
      }
    ],
    tags: ['skill-development', 'employment', 'training', 'youth', 'certification'],
    viewCount: 15420,
    applicationCount: 3240,
    rating: 4.5,
    ratingCount: 856,
    status: 'ACTIVE',
    launchedOn: new Date('2015-07-15'),
    updatedAt: new Date(),
    createdAt: new Date('2015-07-01'),
    featured: true
  };
}

/**
 * Example 4: Creating a recommendation result with detailed insights
 */
export function exampleRecommendationResult(): RecommendationResult {
  const scheme = exampleGovernmentScheme();
  
  return {
    userId: 'user-123',
    recommendations: [
      {
        scheme: {
          id: scheme.id,
          name: scheme.name,
          shortDescription: scheme.shortDescription,
          category: scheme.category,
          managedBy: scheme.managedBy,
          level: scheme.level,
          benefits: scheme.benefits.map(b => ({
            type: b.type,
            description: b.description,
            amount: b.amount
          })),
          deadline: {
            hasDeadline: scheme.deadline.hasDeadline,
            date: scheme.deadline.date,
            isOpen: scheme.deadline.isOpen
          },
          tags: scheme.tags,
          featured: scheme.featured,
          status: scheme.status
        },
        score: 95,
        eligibility: {
          isEligible: true,
          confidenceScore: 98,
          matchedCriteria: ['Age Range', 'Income Band', 'Location', 'Employment Status'],
          unmatchedCriteria: [],
          reasons: [
            'You meet all eligibility criteria for this scheme',
            'This scheme is highly relevant to your profile'
          ]
        },
        reasons: [
          {
            type: 'PERFECT_MATCH',
            matchedCriteria: ['Age Range', 'Income Band', 'Location'],
            description: 'You perfectly match all eligibility criteria'
          },
          {
            type: 'HIGH_BENEFIT',
            benefitAmount: 8000,
            description: 'This scheme offers substantial financial benefits'
          },
          {
            type: 'USER_PREFERENCE',
            preferredCategory: SchemeCategory.EMPLOYMENT,
            description: 'Matches your preferred category'
          }
        ],
        priority: 'HIGH',
        alreadyApplied: false,
        saved: false,
        estimatedBenefit: 8000,
        actionItems: [
          'Complete your profile to 100% for better chances',
          'Keep your Aadhaar card ready for verification'
        ],
        nextSteps: [
          'Click "Apply Now" to start your application',
          'Upload required documents',
          'Submit the application form'
        ]
      }
    ],
    totalEligibleSchemes: 12,
    categoryBreakdown: [
      {
        category: SchemeCategory.EMPLOYMENT,
        count: 5,
        topScheme: {
          id: scheme.id,
          name: scheme.name,
          shortDescription: scheme.shortDescription,
          category: scheme.category,
          managedBy: scheme.managedBy,
          level: scheme.level,
          benefits: [],
          deadline: { hasDeadline: false, isOpen: true },
          tags: scheme.tags,
          featured: true,
          status: 'ACTIVE'
        }
      },
      {
        category: SchemeCategory.EDUCATION,
        count: 4
      },
      {
        category: SchemeCategory.HOUSING,
        count: 3
      }
    ],
    metadata: {
      generatedAt: new Date(),
      algorithmVersion: '2.1.0',
      profileCompleteness: 95,
      includesAISuggestions: true,
      processingTimeMs: 245
    },
    insights: {
      missingProfileInfo: ['Bank Account Details'],
      eligibilityTips: [
        'Complete your bank account information to receive benefits faster',
        'Keep all your documents up to date'
      ],
      almostEligible: [
        {
          scheme: {
            id: 'scheme-999',
            name: 'Housing for All',
            shortDescription: 'Affordable housing scheme',
            category: SchemeCategory.HOUSING,
            managedBy: 'Ministry of Housing',
            level: 'CENTRAL',
            benefits: [],
            deadline: { hasDeadline: true, date: new Date('2024-12-31'), isOpen: true },
            tags: ['housing'],
            featured: false,
            status: 'ACTIVE'
          },
          missingCriteria: ['Income should be below ₹1,00,000'],
          howToQualify: ['This scheme may become available if your income decreases']
        }
      ],
      expiringSoon: [
        {
          scheme: {
            id: 'scheme-888',
            name: 'Student Scholarship',
            shortDescription: 'Merit-based scholarship',
            category: SchemeCategory.EDUCATION,
            managedBy: 'Ministry of Education',
            level: 'STATE',
            benefits: [],
            deadline: { hasDeadline: true, date: new Date('2024-02-28'), isOpen: true },
            tags: ['education', 'scholarship'],
            featured: false,
            status: 'ACTIVE'
          },
          daysRemaining: 15
        }
      ]
    },
    stale: false,
    refreshAfter: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
  };
}

/**
 * Example 5: Creating an application submission
 */
export function exampleSchemeApplication(): SchemeApplication {
  const user = exampleUserProfile();
  const scheme = exampleGovernmentScheme();
  
  return {
    id: 'app-001',
    applicationNumber: 'PMKVY-2024-001234',
    userId: user.id,
    userProfile: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      aadhaarNumber: user.aadhaarNumber,
      address: user.address
    },
    schemeId: scheme.id,
    scheme: {
      id: scheme.id,
      name: scheme.name,
      category: scheme.category,
      managedBy: scheme.managedBy,
      level: scheme.level
    },
    status: ApplicationStatus.UNDER_REVIEW,
    formData: {
      trainingCenterPreference: 'Pune Training Center',
      courseSelected: 'Web Development',
      previousTraining: false,
      employmentStatus: 'Unemployed',
      educationLevel: 'Graduate'
    },
    documents: [
      {
        id: 'doc-001',
        type: 'AADHAAR',
        filename: 'aadhaar_ramesh.pdf',
        fileUrl: 'https://storage.example.com/docs/aadhaar_ramesh.pdf',
        fileSizeBytes: 245000,
        mimeType: 'application/pdf',
        uploadedAt: new Date('2024-01-20'),
        verified: true
      },
      {
        id: 'doc-002',
        type: 'EDUCATION_CERTIFICATE',
        filename: 'degree_certificate.pdf',
        fileUrl: 'https://storage.example.com/docs/degree.pdf',
        fileSizeBytes: 512000,
        mimeType: 'application/pdf',
        uploadedAt: new Date('2024-01-20'),
        verified: false
      }
    ],
    reviews: [
      {
        id: 'review-001',
        reviewerId: 'admin-456',
        reviewerName: 'Priya Sharma',
        status: ApplicationStatus.UNDER_REVIEW,
        comments: 'All documents received. Verifying education certificate.',
        reviewedAt: new Date('2024-01-21'),
        documentsReviewed: ['AADHAAR']
      }
    ],
    statusHistory: [
      {
        from: ApplicationStatus.DRAFT,
        to: ApplicationStatus.SUBMITTED,
        changedBy: user.id,
        notes: 'Application submitted by user',
        timestamp: new Date('2024-01-20T10:30:00')
      },
      {
        from: ApplicationStatus.SUBMITTED,
        to: ApplicationStatus.UNDER_REVIEW,
        changedBy: 'admin-456',
        notes: 'Application moved to review queue',
        timestamp: new Date('2024-01-21T09:15:00')
      }
    ],
    submittedAt: new Date('2024-01-20T10:30:00'),
    updatedAt: new Date('2024-01-21T09:15:00'),
    expectedProcessingDays: 15,
    estimatedCompletionDate: new Date('2024-02-05'),
    notifications: {
      email: true,
      sms: true,
      push: true,
      onStatusChange: true,
      onDocumentVerification: true,
      onReview: true
    },
    priority: 'NORMAL',
    tags: ['skill-development', 'employment']
  };
}

/**
 * Example 6: Type-safe eligibility checking with discriminated unions
 */
export function checkIncomeEligibility(
  userIncomeBand: import('./eligibility').IncomeBand,
  schemeIncomeBand: import('./eligibility').IncomeBand
): boolean {
  // TypeScript ensures we handle all cases correctly
  if (schemeIncomeBand.type === 'NO_INCOME_LIMIT') {
    return true;
  }
  
  if (userIncomeBand.type === 'BELOW_POVERTY_LINE') {
    return schemeIncomeBand.type === 'BELOW_POVERTY_LINE' ||
           schemeIncomeBand.type === 'LOW_INCOME' ||
           schemeIncomeBand.type === 'NO_INCOME_LIMIT';
  }
  
  // More logic here...
  // TypeScript's type narrowing helps ensure correctness
  return false;
}

/**
 * Example 7: Type-safe age range checking
 */
export function checkAgeEligibility(
  userAge: number,
  schemeAgeRange: import('./eligibility').AgeRange
): boolean {
  switch (schemeAgeRange.type) {
    case 'NO_AGE_LIMIT':
      return true;
    case 'CHILD':
    case 'YOUNG_ADULT':
    case 'ADULT':
      return userAge >= schemeAgeRange.minAge && userAge <= schemeAgeRange.maxAge;
    case 'SENIOR_CITIZEN':
      return userAge >= schemeAgeRange.minAge;
    case 'SPECIFIC_AGE':
      return userAge >= schemeAgeRange.minAge && userAge <= schemeAgeRange.maxAge;
    default:
      // TypeScript ensures exhaustive checking
      const _exhaustive: never = schemeAgeRange;
      return false;
  }
}
