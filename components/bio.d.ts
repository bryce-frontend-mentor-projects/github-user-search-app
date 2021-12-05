export interface BioProps {
    /**
     * String to use for the bio.
     */
    bio?: string | null;
}
/**
 * Container for the bio information. If the bio is undefined or null uses the text "This profile has no bio"
 */
export declare const Bio: (props: BioProps) => JSX.Element;
