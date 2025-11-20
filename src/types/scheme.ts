/**
 * Government scheme types and structures
 */

import { SchemeCategory, IndianState } from './enums';
import { SchemeEligibility } from './eligibility';

/**
 * Document required for scheme application
 */
export interface RequiredDocument {
  /** Document type identifier */
  type: string;

  /** Human-readable document name */
  name: string;

  /** Whether this document is mandatory */
  mandatory: boolean;

  /** Description of what the document should contain */
  description: string;

  /** Accepted file formats */
  acceptedFormats?: string[];

  /** Maximum file size in MB */
  maxSizeMB?: number;
}

/**
 * Benefit details of a scheme
 */
export interface SchemeBenefit {
  /** Type of benefit (e.g., 'FINANCIAL', 'SUBSIDY', 'SERVICE') */
  type: string;

  /** Description of the benefit */
  description: string;

  /** Amount if financial benefit (in INR) */
  amount?: number;

  /** Percentage if subsidy benefit */
  percentage?: number;

  /** Frequency of benefit ('ONE_TIME', 'MONTHLY', 'QUARTERLY', 'YEARLY') */
  frequency?: string;

  /** Duration in months (for recurring benefits) */
  durationMonths?: number;
}

/**
 * Application deadline information
 */
export interface ApplicationDeadline {
  /** Whether the scheme has a deadline */
  hasDeadline: boolean;

  /** Deadline date if applicable */
  date?: Date;

  /** Whether applications are currently open */
  isOpen: boolean;

  /** Date when applications open */
  opensOn?: Date;

  /** Description of the application period */
  description: string;
}

/**
 * Complete government scheme information
 */
export interface GovernmentScheme {
  /** Unique scheme identifier */
  id: string;

  /** Official scheme name */
  name: string;

  /** Short description (for listings) */
  shortDescription: string;

  /** Detailed description */
  description: string;

  /** Scheme category */
  category: SchemeCategory;

  /** Sub-category for more specific classification */
  subCategory?: string;

  /** Government department/ministry managing the scheme */
  managedBy: string;

  /** Level of scheme (Central, State, District) */
  level: 'CENTRAL' | 'STATE' | 'DISTRICT' | 'PANCHAYAT';

  /** Applicable states (undefined means all-India) */
  applicableStates?: IndianState[];

  /** Eligibility criteria */
  eligibility: SchemeEligibility;

  /** Benefits provided by the scheme */
  benefits: SchemeBenefit[];

  /** Required documents for application */
  requiredDocuments: RequiredDocument[];

  /** Application deadline information */
  deadline: ApplicationDeadline;

  /** Official website URL */
  officialWebsite?: string;

  /** Contact information */
  contactInfo?: {
    email?: string;
    phone?: string;
    helpline?: string;
    address?: string;
  };

  /** Application process steps */
  applicationProcess?: {
    step: number;
    title: string;
    description: string;
  }[];

  /** Frequently asked questions */
  faqs?: {
    question: string;
    answer: string;
  }[];

  /** Tags for better searchability */
  tags: string[];

  /** Number of times this scheme has been viewed */
  viewCount: number;

  /** Number of applications submitted */
  applicationCount: number;

  /** Average rating from users */
  rating?: number;

  /** Number of ratings */
  ratingCount?: number;

  /** Scheme status */
  status: 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'COMING_SOON';

  /** Scheme launch date */
  launchedOn?: Date;

  /** Last updated timestamp */
  updatedAt: Date;

  /** Created timestamp */
  createdAt: Date;

  /** Featured scheme flag */
  featured: boolean;
}

/**
 * Scheme summary for list views (lighter weight)
 */
export interface SchemeSummary {
  id: string;
  name: string;
  shortDescription: string;
  category: SchemeCategory;
  managedBy: string;
  level: 'CENTRAL' | 'STATE' | 'DISTRICT' | 'PANCHAYAT';
  benefits: Pick<SchemeBenefit, 'type' | 'description' | 'amount'>[];
  deadline: Pick<ApplicationDeadline, 'hasDeadline' | 'date' | 'isOpen'>;
  tags: string[];
  featured: boolean;
  status: 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'COMING_SOON';
}

/**
 * Scheme filters for search and discovery
 */
export interface SchemeFilters {
  /** Filter by categories */
  categories?: SchemeCategory[];

  /** Filter by states */
  states?: IndianState[];

  /** Filter by scheme level */
  levels?: ('CENTRAL' | 'STATE' | 'DISTRICT' | 'PANCHAYAT')[];

  /** Filter by scheme status */
  statuses?: ('ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'COMING_SOON')[];

  /** Filter by benefit amount range */
  benefitAmountRange?: {
    min?: number;
    max?: number;
  };

  /** Filter by deadline */
  hasDeadline?: boolean;

  /** Filter by open applications */
  isOpen?: boolean;

  /** Filter by featured schemes */
  featured?: boolean;

  /** Search query */
  searchQuery?: string;

  /** Sort by field */
  sortBy?: 'NAME' | 'DEADLINE' | 'BENEFIT_AMOUNT' | 'RATING' | 'POPULARITY' | 'RECENT';

  /** Sort order */
  sortOrder?: 'ASC' | 'DESC';

  /** Pagination */
  page?: number;
  pageSize?: number;
}

/**
 * Scheme search/filter result
 */
export interface SchemeSearchResult {
  /** Matching schemes */
  schemes: SchemeSummary[];

  /** Total count of matching schemes */
  totalCount: number;

  /** Current page number */
  page: number;

  /** Page size */
  pageSize: number;

  /** Total pages */
  totalPages: number;

  /** Applied filters */
  appliedFilters: SchemeFilters;
}
