package com.vgtech.myapp.service.mapper;

import com.vgtech.myapp.domain.UserData;
import com.vgtech.myapp.service.dto.UserDataDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link UserData} and its DTO {@link UserDataDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface UserDataMapper extends EntityMapper<UserDataDTO, UserData> {}
