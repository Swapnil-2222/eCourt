package com.vgtech.myapp.service.mapper;

import com.vgtech.myapp.domain.Hearing;
import com.vgtech.myapp.service.dto.HearingDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Hearing} and its DTO {@link HearingDTO}.
 */
@Mapper(componentModel = "spring", uses = { CourtCaseMapper.class })
public interface HearingMapper extends EntityMapper<HearingDTO, Hearing> {
    @Mapping(target = "hearing", source = "hearing", qualifiedByName = "id")
    HearingDTO toDto(Hearing s);
}
