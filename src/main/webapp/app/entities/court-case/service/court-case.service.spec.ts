import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ICourtCase, CourtCase } from '../court-case.model';

import { CourtCaseService } from './court-case.service';

describe('CourtCase Service', () => {
  let service: CourtCaseService;
  let httpMock: HttpTestingController;
  let elemDefault: ICourtCase;
  let expectedResult: ICourtCase | ICourtCase[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(CourtCaseService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 0,
      caseNo: 'AAAAAAA',
      villageName: 'AAAAAAA',
      accuserName: 'AAAAAAA',
      applicationNo: 'AAAAAAA',
      landReferenceNo: 'AAAAAAA',
      firstAppeal: 'AAAAAAA',
      amount: 'AAAAAAA',
      projectName: 'AAAAAAA',
      courtName: 'AAAAAAA',
      defendantName: 'AAAAAAA',
      caseDescription: 'AAAAAAA',
      caseFilingDate: 'AAAAAAA',
      totalClaimAmount: 'AAAAAAA',
      caseOfficer: 'AAAAAAA',
      caselawyer: 'AAAAAAA',
      nextHearingDate: 'AAAAAAA',
      amountDepositeInCourt: 'AAAAAAA',
      lar: 'AAAAAAA',
      incCompensation: 'AAAAAAA',
      amountPaidSLO: 'AAAAAAA',
      chequeNo: 'AAAAAAA',
      chequeDate: 'AAAAAAA',
      appealNo: 'AAAAAAA',
      courtAmount: 'AAAAAAA',
      appealAmount: 'AAAAAAA',
      appealDate: 'AAAAAAA',
      description: 'AAAAAAA',
      comment: 'AAAAAAA',
      caseStatus: 'AAAAAAA',
      freefield1: 'AAAAAAA',
      freefield2: 'AAAAAAA',
      freefield3: 'AAAAAAA',
      lastModifiedBy: 'AAAAAAA',
      lastModified: 'AAAAAAA',
      totalArea: 'AAAAAAA',
      landAcquisitionOfficerNo: 'AAAAAAA',
      relatedClauses: 'AAAAAAA',
      section4NotificationDate: 'AAAAAAA',
      judgementDate: 'AAAAAAA',
      accuserLawyer: 'AAAAAAA',
      defedantLawyer: 'AAAAAAA',
      natureResult: 'AAAAAAA',
      applicationNoFileAdditionalInterest: 'AAAAAAA',
      currentApplicationStatus: 'AAAAAAA',
      amountAdditionalInterestdefendantDistrictCourt: 'AAAAAAA',
      currentCaseStatus: 'AAAAAAA',
      bankGuaranteeDetailApplicationNo: 'AAAAAAA',
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a CourtCase', () => {
      const returnedFromService = Object.assign(
        {
          id: 0,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new CourtCase()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a CourtCase', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          caseNo: 'BBBBBB',
          villageName: 'BBBBBB',
          accuserName: 'BBBBBB',
          applicationNo: 'BBBBBB',
          landReferenceNo: 'BBBBBB',
          firstAppeal: 'BBBBBB',
          amount: 'BBBBBB',
          projectName: 'BBBBBB',
          courtName: 'BBBBBB',
          defendantName: 'BBBBBB',
          caseDescription: 'BBBBBB',
          caseFilingDate: 'BBBBBB',
          totalClaimAmount: 'BBBBBB',
          caseOfficer: 'BBBBBB',
          caselawyer: 'BBBBBB',
          nextHearingDate: 'BBBBBB',
          amountDepositeInCourt: 'BBBBBB',
          lar: 'BBBBBB',
          incCompensation: 'BBBBBB',
          amountPaidSLO: 'BBBBBB',
          chequeNo: 'BBBBBB',
          chequeDate: 'BBBBBB',
          appealNo: 'BBBBBB',
          courtAmount: 'BBBBBB',
          appealAmount: 'BBBBBB',
          appealDate: 'BBBBBB',
          description: 'BBBBBB',
          comment: 'BBBBBB',
          caseStatus: 'BBBBBB',
          freefield1: 'BBBBBB',
          freefield2: 'BBBBBB',
          freefield3: 'BBBBBB',
          lastModifiedBy: 'BBBBBB',
          lastModified: 'BBBBBB',
          totalArea: 'BBBBBB',
          landAcquisitionOfficerNo: 'BBBBBB',
          relatedClauses: 'BBBBBB',
          section4NotificationDate: 'BBBBBB',
          judgementDate: 'BBBBBB',
          accuserLawyer: 'BBBBBB',
          defedantLawyer: 'BBBBBB',
          natureResult: 'BBBBBB',
          applicationNoFileAdditionalInterest: 'BBBBBB',
          currentApplicationStatus: 'BBBBBB',
          amountAdditionalInterestdefendantDistrictCourt: 'BBBBBB',
          currentCaseStatus: 'BBBBBB',
          bankGuaranteeDetailApplicationNo: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a CourtCase', () => {
      const patchObject = Object.assign(
        {
          caseNo: 'BBBBBB',
          applicationNo: 'BBBBBB',
          amount: 'BBBBBB',
          defendantName: 'BBBBBB',
          caseDescription: 'BBBBBB',
          totalClaimAmount: 'BBBBBB',
          caselawyer: 'BBBBBB',
          lar: 'BBBBBB',
          chequeNo: 'BBBBBB',
          appealNo: 'BBBBBB',
          appealAmount: 'BBBBBB',
          freefield3: 'BBBBBB',
          lastModified: 'BBBBBB',
          totalArea: 'BBBBBB',
          relatedClauses: 'BBBBBB',
          accuserLawyer: 'BBBBBB',
          defedantLawyer: 'BBBBBB',
          applicationNoFileAdditionalInterest: 'BBBBBB',
        },
        new CourtCase()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of CourtCase', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          caseNo: 'BBBBBB',
          villageName: 'BBBBBB',
          accuserName: 'BBBBBB',
          applicationNo: 'BBBBBB',
          landReferenceNo: 'BBBBBB',
          firstAppeal: 'BBBBBB',
          amount: 'BBBBBB',
          projectName: 'BBBBBB',
          courtName: 'BBBBBB',
          defendantName: 'BBBBBB',
          caseDescription: 'BBBBBB',
          caseFilingDate: 'BBBBBB',
          totalClaimAmount: 'BBBBBB',
          caseOfficer: 'BBBBBB',
          caselawyer: 'BBBBBB',
          nextHearingDate: 'BBBBBB',
          amountDepositeInCourt: 'BBBBBB',
          lar: 'BBBBBB',
          incCompensation: 'BBBBBB',
          amountPaidSLO: 'BBBBBB',
          chequeNo: 'BBBBBB',
          chequeDate: 'BBBBBB',
          appealNo: 'BBBBBB',
          courtAmount: 'BBBBBB',
          appealAmount: 'BBBBBB',
          appealDate: 'BBBBBB',
          description: 'BBBBBB',
          comment: 'BBBBBB',
          caseStatus: 'BBBBBB',
          freefield1: 'BBBBBB',
          freefield2: 'BBBBBB',
          freefield3: 'BBBBBB',
          lastModifiedBy: 'BBBBBB',
          lastModified: 'BBBBBB',
          totalArea: 'BBBBBB',
          landAcquisitionOfficerNo: 'BBBBBB',
          relatedClauses: 'BBBBBB',
          section4NotificationDate: 'BBBBBB',
          judgementDate: 'BBBBBB',
          accuserLawyer: 'BBBBBB',
          defedantLawyer: 'BBBBBB',
          natureResult: 'BBBBBB',
          applicationNoFileAdditionalInterest: 'BBBBBB',
          currentApplicationStatus: 'BBBBBB',
          amountAdditionalInterestdefendantDistrictCourt: 'BBBBBB',
          currentCaseStatus: 'BBBBBB',
          bankGuaranteeDetailApplicationNo: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a CourtCase', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addCourtCaseToCollectionIfMissing', () => {
      it('should add a CourtCase to an empty array', () => {
        const courtCase: ICourtCase = { id: 123 };
        expectedResult = service.addCourtCaseToCollectionIfMissing([], courtCase);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(courtCase);
      });

      it('should not add a CourtCase to an array that contains it', () => {
        const courtCase: ICourtCase = { id: 123 };
        const courtCaseCollection: ICourtCase[] = [
          {
            ...courtCase,
          },
          { id: 456 },
        ];
        expectedResult = service.addCourtCaseToCollectionIfMissing(courtCaseCollection, courtCase);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a CourtCase to an array that doesn't contain it", () => {
        const courtCase: ICourtCase = { id: 123 };
        const courtCaseCollection: ICourtCase[] = [{ id: 456 }];
        expectedResult = service.addCourtCaseToCollectionIfMissing(courtCaseCollection, courtCase);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(courtCase);
      });

      it('should add only unique CourtCase to an array', () => {
        const courtCaseArray: ICourtCase[] = [{ id: 123 }, { id: 456 }, { id: 27395 }];
        const courtCaseCollection: ICourtCase[] = [{ id: 123 }];
        expectedResult = service.addCourtCaseToCollectionIfMissing(courtCaseCollection, ...courtCaseArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const courtCase: ICourtCase = { id: 123 };
        const courtCase2: ICourtCase = { id: 456 };
        expectedResult = service.addCourtCaseToCollectionIfMissing([], courtCase, courtCase2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(courtCase);
        expect(expectedResult).toContain(courtCase2);
      });

      it('should accept null and undefined values', () => {
        const courtCase: ICourtCase = { id: 123 };
        expectedResult = service.addCourtCaseToCollectionIfMissing([], null, courtCase, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(courtCase);
      });

      it('should return initial array if no CourtCase is added', () => {
        const courtCaseCollection: ICourtCase[] = [{ id: 123 }];
        expectedResult = service.addCourtCaseToCollectionIfMissing(courtCaseCollection, undefined, null);
        expect(expectedResult).toEqual(courtCaseCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
