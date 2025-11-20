/**
 * Application submission and tracking types
 */

import { ApplicationStatus } from './enums';
import { UserProfile } from './user';
import { GovernmentScheme } from './scheme';

/**
 * Uploaded document for application
 */
export interface UploadedDocument {
  /** Document ID */
  id: string;

  /** Document type (matches RequiredDocument.type) */
  type: string;

  /** Original filename */
  filename: string;

  /** File URL in storage */
  fileUrl: string;

  /** File size in bytes */
  fileSizeBytes: number;

  /** MIME type */
  mimeType: string;

  /** Upload timestamp */
  uploadedAt: Date;

  /** Whether document is verified by admin */
  verified: boolean;

  /** Verification notes from admin */
  verificationNotes?: string;
}

/**
 * Application form data (flexible JSONB structure)
 */
export interface ApplicationFormData {
  /** Dynamic form fields based on scheme requirements */
  [key: string]: string | number | boolean | Date | string[] | null | undefined;
}

/**
 * Application review by admin/moderator
 */
export interface ApplicationReview {
  /** Review ID */
  id: string;

  /** Reviewer ID */
  reviewerId: string;

  /** Reviewer name */
  reviewerName: string;

  /** Review status */
  status: ApplicationStatus;

  /** Review comments */
  comments: string;

  /** Reviewed at timestamp */
  reviewedAt: Date;

  /** Documents reviewed */
  documentsReviewed: string[];

  /** Issues found (if any) */
  issues?: {
    field: string;
    issue: string;
    severity: 'HIGH' | 'MEDIUM' | 'LOW';
  }[];

  /** Additional documents requested */
  additionalDocumentsRequested?: string[];
}

/**
 * Application status history entry
 */
export interface ApplicationStatusHistory {
  /** Previous status */
  from: ApplicationStatus;

  /** New status */
  to: ApplicationStatus;

  /** Changed by user ID */
  changedBy: string;

  /** Change reason/notes */
  notes?: string;

  /** Timestamp */
  timestamp: Date;
}

/**
 * Application notification settings
 */
export interface ApplicationNotificationSettings {
  /** Email notifications */
  email: boolean;

  /** SMS notifications */
  sms: boolean;

  /** Push notifications */
  push: boolean;

  /** Notify on status change */
  onStatusChange: boolean;

  /** Notify on document verification */
  onDocumentVerification: boolean;

  /** Notify on review */
  onReview: boolean;
}

/**
 * Complete application information
 */
export interface SchemeApplication {
  /** Unique application identifier */
  id: string;

  /** Application number (human-readable) */
  applicationNumber: string;

  /** User who submitted the application */
  userId: string;

  /** User profile snapshot at time of application */
  userProfile: Partial<UserProfile>;

  /** Scheme ID */
  schemeId: string;

  /** Scheme information snapshot */
  scheme: Pick<GovernmentScheme, 'id' | 'name' | 'category' | 'managedBy' | 'level'>;

  /** Current application status */
  status: ApplicationStatus;

  /** Application form data */
  formData: ApplicationFormData;

  /** Uploaded documents */
  documents: UploadedDocument[];

  /** Application reviews */
  reviews: ApplicationReview[];

  /** Status history */
  statusHistory: ApplicationStatusHistory[];

  /** Submission timestamp */
  submittedAt: Date;

  /** Last updated timestamp */
  updatedAt: Date;

  /** Expected processing time in days */
  expectedProcessingDays?: number;

  /** Estimated completion date */
  estimatedCompletionDate?: Date;

  /** Actual completion date (when approved/rejected) */
  completedAt?: Date;

  /** Approval details if approved */
  approvalDetails?: {
    /** Approval reference number */
    referenceNumber: string;

    /** Approved amount if financial benefit */
    approvedAmount?: number;

    /** Approval date */
    approvedAt: Date;

    /** Approved by */
    approvedBy: string;

    /** Approval notes */
    notes?: string;

    /** Disbursement information */
    disbursement?: {
      /** Disbursement method */
      method: 'BANK_TRANSFER' | 'CHEQUE' | 'DD' | 'DIRECT_BENEFIT_TRANSFER';

      /** Disbursement status */
      status: 'PENDING' | 'PROCESSED' | 'COMPLETED' | 'FAILED';

      /** Transaction reference */
      transactionRef?: string;

      /** Disbursed amount */
      amount?: number;

      /** Disbursement date */
      disbursedAt?: Date;
    };
  };

  /** Rejection details if rejected */
  rejectionDetails?: {
    /** Rejection reason */
    reason: string;

    /** Detailed explanation */
    explanation?: string;

    /** Can reapply */
    canReapply: boolean;

    /** Reapply after date */
    reapplyAfter?: Date;

    /** Rejected by */
    rejectedBy: string;

    /** Rejection date */
    rejectedAt: Date;
  };

  /** Withdrawal details if withdrawn */
  withdrawalDetails?: {
    /** Withdrawal reason */
    reason: string;

    /** Withdrawn at */
    withdrawnAt: Date;

    /** Withdrawn by user ID */
    withdrawnBy: string;
  };

  /** Notification settings */
  notifications: ApplicationNotificationSettings;

  /** Priority flag (for urgent applications) */
  priority: 'NORMAL' | 'HIGH' | 'URGENT';

  /** Tags for categorization */
  tags?: string[];

  /** Internal notes (admin only) */
  internalNotes?: string;

  /** Assigned to (for workflow) */
  assignedTo?: string;
}

/**
 * Application summary for list views
 */
export interface ApplicationSummary {
  id: string;
  applicationNumber: string;
  userId: string;
  schemeId: string;
  schemeName: string;
  schemeCategory: string;
  status: ApplicationStatus;
  submittedAt: Date;
  updatedAt: Date;
  priority: 'NORMAL' | 'HIGH' | 'URGENT';
  estimatedCompletionDate?: Date;
}

/**
 * Application filters for search
 */
export interface ApplicationFilters {
  /** Filter by user ID */
  userId?: string;

  /** Filter by scheme ID */
  schemeId?: string;

  /** Filter by status */
  statuses?: ApplicationStatus[];

  /** Filter by date range */
  submittedAfter?: Date;
  submittedBefore?: Date;

  /** Filter by priority */
  priorities?: ('NORMAL' | 'HIGH' | 'URGENT')[];

  /** Search query */
  searchQuery?: string;

  /** Sort by field */
  sortBy?: 'SUBMITTED_AT' | 'UPDATED_AT' | 'STATUS' | 'PRIORITY';

  /** Sort order */
  sortOrder?: 'ASC' | 'DESC';

  /** Pagination */
  page?: number;
  pageSize?: number;
}

/**
 * Application statistics
 */
export interface ApplicationStatistics {
  /** Total applications */
  total: number;

  /** Breakdown by status */
  byStatus: {
    [key in ApplicationStatus]: number;
  };

  /** Average processing time in days */
  averageProcessingDays: number;

  /** Approval rate percentage */
  approvalRate: number;

  /** Rejection rate percentage */
  rejectionRate: number;

  /** Pending applications */
  pending: number;

  /** Applications processed this month */
  processedThisMonth: number;
}

/**
 * Draft application (not yet submitted)
 */
export interface DraftApplication {
  id: string;
  userId: string;
  schemeId: string;
  formData: Partial<ApplicationFormData>;
  documents: Partial<UploadedDocument>[];
  savedAt: Date;
  expiresAt: Date;
}
