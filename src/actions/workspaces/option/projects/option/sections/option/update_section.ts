import updateSectionName from "../../../../../../../common/updateSectionName";
import { Section } from "../../../../../../../utils/interfaces";

// @description Update section name

if(options.sections) {
    const section = options.sections as Section;
    updateSectionName(section);
}