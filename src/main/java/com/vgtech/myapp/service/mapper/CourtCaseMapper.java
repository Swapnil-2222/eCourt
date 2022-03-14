package com.vgtech.myapp.service.mapper;

import com.vgtech.myapp.domain.CourtCase;
import com.vgtech.myapp.service.dto.CourtCaseDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourtCase} and its DTO {@link CourtCaseDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CourtCaseMapper extends EntityMapper<CourtCaseDTO, CourtCase> {
    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourtCaseDTO toDtoId(CourtCase courtCase);
}
