import removeSection from "../../../../../../../common/removeSection";
import { Section } from "../../../../../../../utils/interfaces";

// @description Delete section

if (options.sections) {
	const section = options.sections as Section;
	removeSection(section.gid);
}