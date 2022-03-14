import { IHearing } from 'app/entities/hearing/hearing.model';

export interface ICourtCase {
  id?: number;
  caseNo?: string | null;
  villageName?: string | null;
  accuserName?: string | null;
  applicationNo?: string | null;
  landReferenceNo?: string | null;
  firstAppeal?: string | null;
  amount?: string | null;
  projectName?: string | null;
  courtName?: string | null;
  defendantName?: string | null;
  caseDescription?: string | null;
  caseFilingDate?: string | null;
  totalClaimAmount?: string | null;
  caseOfficer?: string | null;
  caselawyer?: string | null;
  nextHearingDate?: string | null;
  amountDepositeInCourt?: string | null;
  lar?: string | null;
  incCompensation?: string | null;
  amountPaidSLO?: string | null;
  chequeNo?: string | null;
  chequeDate?: string | null;
  appealNo?: string | null;
  courtAmount?: string | null;
  appealAmount?: string | null;
  appealDate?: string | null;
  description?: string | null;
  comment?: string | null;
  caseStatus?: string | null;
  freefield1?: string | null;
  freefield2?: string | null;
  freefield3?: string | null;
  lastModifiedBy?: string | null;
  lastModified?: string | null;
  totalArea?: string | null;
  landAcquisitionOfficerNo?: string | null;
  relatedClauses?: string | null;
  section4NotificationDate?: string | null;
  judgementDate?: string | null;
  accuserLawyer?: string | null;
  defedantLawyer?: string | null;
  natureResult?: string | null;
  applicationNoFileAdditionalInterest?: string | null;
  currentApplicationStatus?: string | null;
  amountAdditionalInterestdefendantDistrictCourt?: string | null;
  currentCaseStatus?: string | null;
  bankGuaranteeDetailApplicationNo?: string | null;
  courtCases?: IHearing[] | null;
}

export class CourtCase implements ICourtCase {
  constructor(
    public id?: number,
    public caseNo?: string | null,
    public villageName?: string | null,
    public accuserName?: string | null,
    public applicationNo?: string | null,
    public landReferenceNo?: string | null,
    public firstAppeal?: string | null,
    public amount?: string | null,
    public projectName?: string | null,
    public courtName?: string | null,
    public defendantName?: string | null,
    public caseDescription?: string | null,
    public caseFilingDate?: string | null,
    public totalClaimAmount?: string | null,
    public caseOfficer?: string | null,
    public caselawyer?: string | null,
    public nextHearingDate?: string | null,
    public amountDepositeInCourt?: string | null,
    public lar?: string | null,
    public incCompensation?: string | null,
    public amountPaidSLO?: string | null,
    public chequeNo?: string | null,
    public chequeDate?: string | null,
    public appealNo?: string | null,
    public courtAmount?: string | null,
    public appealAmount?: string | null,
    public appealDate?: string | null,
    public description?: string | null,
    public comment?: string | null,
    public caseStatus?: string | null,
    public freefield1?: string | null,
    public freefield2?: string | null,
    public freefield3?: string | null,
    public lastModifiedBy?: string | null,
    public lastModified?: string | null,
    public totalArea?: string | null,
    public landAcquisitionOfficerNo?: string | null,
    public relatedClauses?: string | null,
    public section4NotificationDate?: string | null,
    public judgementDate?: string | null,
    public accuserLawyer?: string | null,
    public defedantLawyer?: string | null,
    public natureResult?: string | null,
    public applicationNoFileAdditionalInterest?: string | null,
    public currentApplicationStatus?: string | null,
    public amountAdditionalInterestdefendantDistrictCourt?: string | null,
    public currentCaseStatus?: string | null,
    public bankGuaranteeDetailApplicationNo?: string | null,
    public courtCases?: IHearing[] | null
  ) {}
}

export function getCourtCaseIdentifier(courtCase: ICourtCase): number | undefined {
  return courtCase.id;
}
