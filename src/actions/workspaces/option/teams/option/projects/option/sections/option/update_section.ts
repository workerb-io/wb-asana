// @description Update section name

import updateSectionName from "../../../../../../../../../common/updateSectionName";
import { Section } from "../../../../../../../../../utils/interfaces";

if(options.sections) {
    const section = options.sections as Section;
    updateSectionName(section);
}