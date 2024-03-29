import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ICourtCase, CourtCase } from '../court-case.model';
import { CourtCaseService } from '../service/court-case.service';

@Component({
  selector: 'jhi-court-case-update',
  templateUrl: './court-case-update.component.html',
})
export class CourtCaseUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    caseNo: [],
    villageName: [],
    accuserName: [],
    applicationNo: [],
    landReferenceNo: [],
    firstAppeal: [],
    amount: [],
    projectName: [],
    courtName: [],
    defendantName: [],
    caseDescription: [],
    caseFilingDate: [],
    totalClaimAmount: [],
    caseOfficer: [],
    caselawyer: [],
    nextHearingDate: [],
    amountDepositeInCourt: [],
    lar: [],
    incCompensation: [],
    amountPaidSLO: [],
    chequeNo: [],
    chequeDate: [],
    appealNo: [],
    courtAmount: [],
    appealAmount: [],
    appealDate: [],
    description: [],
    comment: [],
    caseStatus: [],
    freefield1: [],
    freefield2: [],
    freefield3: [],
    lastModifiedBy: [],
    lastModified: [],
    totalArea: [],
    landAcquisitionOfficerNo: [],
    relatedClauses: [],
    section4NotificationDate: [],
    judgementDate: [],
    accuserLawyer: [],
    defedantLawyer: [],
    natureResult: [],
    applicationNoFileAdditionalInterest: [],
    currentApplicationStatus: [],
    amountAdditionalInterestdefendantDistrictCourt: [],
    currentCaseStatus: [],
    bankGuaranteeDetailApplicationNo: [],
  });

  constructor(protected courtCaseService: CourtCaseService, protected activatedRoute: ActivatedRoute, protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ courtCase }) => {
      this.updateForm(courtCase);
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const courtCase = this.createFromForm();
    if (courtCase.id !== undefined) {
      this.subscribeToSaveResponse(this.courtCaseService.update(courtCase));
    } else {
      this.subscribeToSaveResponse(this.courtCaseService.create(courtCase));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICourtCase>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(courtCase: ICourtCase): void {
    this.editForm.patchValue({
      id: courtCase.id,
      caseNo: courtCase.caseNo,
      villageName: courtCase.villageName,
      accuserName: courtCase.accuserName,
      applicationNo: courtCase.applicationNo,
      landReferenceNo: courtCase.landReferenceNo,
      firstAppeal: courtCase.firstAppeal,
      amount: courtCase.amount,
      projectName: courtCase.projectName,
      courtName: courtCase.courtName,
      defendantName: courtCase.defendantName,
      caseDescription: courtCase.caseDescription,
      caseFilingDate: courtCase.caseFilingDate,
      totalClaimAmount: courtCase.totalClaimAmount,
      caseOfficer: courtCase.caseOfficer,
      caselawyer: courtCase.caselawyer,
      nextHearingDate: courtCase.nextHearingDate,
      amountDepositeInCourt: courtCase.amountDepositeInCourt,
      lar: courtCase.lar,
      incCompensation: courtCase.incCompensation,
      amountPaidSLO: courtCase.amountPaidSLO,
      chequeNo: courtCase.chequeNo,
      chequeDate: courtCase.chequeDate,
      appealNo: courtCase.appealNo,
      courtAmount: courtCase.courtAmount,
      appealAmount: courtCase.appealAmount,
      appealDate: courtCase.appealDate,
      description: courtCase.description,
      comment: courtCase.comment,
      caseStatus: courtCase.caseStatus,
      freefield1: courtCase.freefield1,
      freefield2: courtCase.freefield2,
      freefield3: courtCase.freefield3,
      lastModifiedBy: courtCase.lastModifiedBy,
      lastModified: courtCase.lastModified,
      totalArea: courtCase.totalArea,
      landAcquisitionOfficerNo: courtCase.landAcquisitionOfficerNo,
      relatedClauses: courtCase.relatedClauses,
      section4NotificationDate: courtCase.section4NotificationDate,
      judgementDate: courtCase.judgementDate,
      accuserLawyer: courtCase.accuserLawyer,
      defedantLawyer: courtCase.defedantLawyer,
      natureResult: courtCase.natureResult,
      applicationNoFileAdditionalInterest: courtCase.applicationNoFileAdditionalInterest,
      currentApplicationStatus: courtCase.currentApplicationStatus,
      amountAdditionalInterestdefendantDistrictCourt: courtCase.amountAdditionalInterestdefendantDistrictCourt,
      currentCaseStatus: courtCase.currentCaseStatus,
      bankGuaranteeDetailApplicationNo: courtCase.bankGuaranteeDetailApplicationNo,
    });
  }

  protected createFromForm(): ICourtCase {
    return {
      ...new CourtCase(),
      id: this.editForm.get(['id'])!.value,
      caseNo: this.editForm.get(['caseNo'])!.value,
      villageName: this.editForm.get(['villageName'])!.value,
      accuserName: this.editForm.get(['accuserName'])!.value,
      applicationNo: this.editForm.get(['applicationNo'])!.value,
      landReferenceNo: this.editForm.get(['landReferenceNo'])!.value,
      firstAppeal: this.editForm.get(['firstAppeal'])!.value,
      amount: this.editForm.get(['amount'])!.value,
      projectName: this.editForm.get(['projectName'])!.value,
      courtName: this.editForm.get(['courtName'])!.value,
      defendantName: this.editForm.get(['defendantName'])!.value,
      caseDescription: this.editForm.get(['caseDescription'])!.value,
      caseFilingDate: this.editForm.get(['caseFilingDate'])!.value,
      totalClaimAmount: this.editForm.get(['totalClaimAmount'])!.value,
      caseOfficer: this.editForm.get(['caseOfficer'])!.value,
      caselawyer: this.editForm.get(['caselawyer'])!.value,
      nextHearingDate: this.editForm.get(['nextHearingDate'])!.value,
      amountDepositeInCourt: this.editForm.get(['amountDepositeInCourt'])!.value,
      lar: this.editForm.get(['lar'])!.value,
      incCompensation: this.editForm.get(['incCompensation'])!.value,
      amountPaidSLO: this.editForm.get(['amountPaidSLO'])!.value,
      chequeNo: this.editForm.get(['chequeNo'])!.value,
      chequeDate: this.editForm.get(['chequeDate'])!.value,
      appealNo: this.editForm.get(['appealNo'])!.value,
      courtAmount: this.editForm.get(['courtAmount'])!.value,
      appealAmount: this.editForm.get(['appealAmount'])!.value,
      appealDate: this.editForm.get(['appealDate'])!.value,
      description: this.editForm.get(['description'])!.value,
      comment: this.editForm.get(['comment'])!.value,
      caseStatus: this.editForm.get(['caseStatus'])!.value,
      freefield1: this.editForm.get(['freefield1'])!.value,
      freefield2: this.editForm.get(['freefield2'])!.value,
      freefield3: this.editForm.get(['freefield3'])!.value,
      lastModifiedBy: this.editForm.get(['lastModifiedBy'])!.value,
      lastModified: this.editForm.get(['lastModified'])!.value,
      totalArea: this.editForm.get(['totalArea'])!.value,
      landAcquisitionOfficerNo: this.editForm.get(['landAcquisitionOfficerNo'])!.value,
      relatedClauses: this.editForm.get(['relatedClauses'])!.value,
      section4NotificationDate: this.editForm.get(['section4NotificationDate'])!.value,
      judgementDate: this.editForm.get(['judgementDate'])!.value,
      accuserLawyer: this.editForm.get(['accuserLawyer'])!.value,
      defedantLawyer: this.editForm.get(['defedantLawyer'])!.value,
      natureResult: this.editForm.get(['natureResult'])!.value,
      applicationNoFileAdditionalInterest: this.editForm.get(['applicationNoFileAdditionalInterest'])!.value,
      currentApplicationStatus: this.editForm.get(['currentApplicationStatus'])!.value,
      amountAdditionalInterestdefendantDistrictCourt: this.editForm.get(['amountAdditionalInterestdefendantDistrictCourt'])!.value,
      currentCaseStatus: this.editForm.get(['currentCaseStatus'])!.value,
      bankGuaranteeDetailApplicationNo: this.editForm.get(['bankGuaranteeDetailApplicationNo'])!.value,
    };
  }
}
