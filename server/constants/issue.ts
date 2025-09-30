export enum IssueType {
  VIDEO = 1,
  AUDIO = 2,
  SUBTITLES = 3,
  OTHER = 4,
  CUSTOM = 5,
}

export enum IssueStatus {
  OPEN = 1,
  RESOLVED = 2,
}

export const IssueTypeName = {
  [IssueType.AUDIO]: 'Audio',
  [IssueType.VIDEO]: 'Video',
  [IssueType.SUBTITLES]: 'Subtitle',
  [IssueType.OTHER]: 'Other',
  [IssueType.CUSTOM]: 'Custom',
};

export const formatIssueTypeName = (
  issueType: IssueType,
  customType?: string | null
): string => {
  if (issueType === IssueType.CUSTOM && customType) {
    return customType;
  }

  return IssueTypeName[issueType] ?? IssueTypeName[IssueType.OTHER];
};
