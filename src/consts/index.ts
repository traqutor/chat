/* eslint-disable */
export const constTaskTypes: any = [
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'AssistPatient',
    'ShortName': 'Patient Assist',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Completed',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'NameOfPatient',
        'Name': 'Name of Patient',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'RoomBed',
        'Name': 'Ward/Room/Bed',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'BedMoverRequired',
        'Name': 'Bed Mover Required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'ContactPrecautions',
        'Name': 'Patient is on contact precautions?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'PatientBariatric',
        'Name': 'Is Patient Bariatric?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'SlideSheetRequired',
        'Name': 'Is slide sheet required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'HoverMattressRequired',
        'Name': 'Is hover mattress required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [
      {
        'TimeOfDayCondition': null,
        'LocationGroupCodeCondition': null,
        'LocationGroupCodesCondition': [],
        'OriginalRecipientSetCondition': null,
        'RecipientSet': null,
        'RecipientSets': []
      }
    ],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 3,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': 'echoing_notification'
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': 'two_x_4_beeps'
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': true,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': true,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#299602',
    'BackgroundColor': '#299602',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'CheckMedicationFridge',
    'ShortName': 'Check Meds Fridge',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'Location',
        'Name': 'Location',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'FridgeID',
        'Name': 'Fridge ID',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'ProblemDescription',
        'Name': 'Problem Description',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Notes',
        'Name': 'Notes',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'CheckCompressor',
        'Name': 'Check Compressor',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [
      {
        'TimeOfDayCondition': null,
        'LocationGroupCodeCondition': null,
        'LocationGroupCodesCondition': [],
        'OriginalRecipientSetCondition': null,
        'RecipientSet': null,
        'RecipientSets': []
      }
    ],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 4,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': 'marimba_do_re_mi_fa_so'
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': true,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': null,
    'BackgroundColor': '#f7367d',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 2,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 1,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'CheckPatientStatus',
    'ShortName': 'Check Patient Status',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Mark as Complete',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'Request',
        'Name': 'Request',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Notes',
        'Name': 'Notes and Comments',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 8,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#318cbd',
    'BackgroundColor': '#318cbd',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': false,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'CleanUp_ToxicSpill',
    'ShortName': 'Clean (Pt. Room)',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': true,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Completed',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'Location',
        'Name': 'Ward/Room/Bed',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Typeofclean',
        'Name': 'Type: Discharge',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Typeofclean2',
        'Name': 'Type: Terminal',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Typeofclean3',
        'Name': 'Type: Infectious',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Specialequimentneeded',
        'Name': 'Special equipment needed?',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 7,
    'BoostedPriority': 10,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': 'trumpet'
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': 'marimba_do_re_mi_fa_so'
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': true,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': null,
    'BackgroundColor': '#c2bc0a',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': '21e5e32e-57d2-4262-9498-dcfb1f56259b',
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': 'Clean Up',
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'Decl_sTask',
    'ShortName': 'Decls task',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'LocationSpecial',
        'Name': 'Room/Bed/Other',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'WheelChairRequired',
        'Name': 'Wheel Chair Required?',
        'Type': 1,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'BedMoverRequired',
        'Name': 'Bed Mover Required?',
        'Type': 1,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithLocalOptionsExtensibleField, DuressAware',
        'Options': [
          {
            'Code': 'Charles',
            'Name': 'Charles'
          },
          {
            'Code': 'Wendy',
            'Name': 'Wendy'
          }
        ],
        'DisplayField': 'Name',
        'Code': 'Patient',
        'Name': 'Patient',
        'Type': 2,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithLocationsExtensibleField, DuressAware',
        'DisplayField': 'Name',
        'Code': 'Location',
        'Name': 'Location',
        'Type': 2,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithOptionsFromMappingExtensibleField, DuressAware',
        'MappingCode': 'AlexaTaskParameters',
        'FilterByValueOfOtherField': null,
        'DisplayField': 'VALUE_RecipientSet',
        'Code': 'Mapping',
        'Name': 'Where do you need this at?',
        'Type': 2,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 0,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#fc0d0d',
    'BackgroundColor': '#1a0101',
    'Color': '#19c714',
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': false,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'FoodServices',
    'ShortName': 'Food Services',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Completed',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'On my way',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'Request',
        'Name': 'Request',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 3,
    'BoostedPriority': 50,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': 'blood_code_resolved'
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': 'blood_code_resolved'
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': 'blood_code_resolved'
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#e8cb12',
    'BackgroundColor': '#e8cb12',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'Helicopter',
    'ShortName': 'Helicopter',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'ETA',
        'Name': 'ETA (minutes)',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'NewField1',
        'Name': 'New field',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 7,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': 'good_news'
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': 'alarm'
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': 'alarm'
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': 'alarm'
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#5b05ab',
    'BackgroundColor': '#5b05ab',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'HelpRightNow',
    'ShortName': 'Help right now',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': true,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'NewField',
        'Name': 'Where are you?',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'NewField1',
        'Name': 'Can you do it right now?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithLocationsExtensibleField, DuressAware',
        'DisplayField': 'Name',
        'Code': 'NewField2',
        'Name': 'Location (SingleSelect(Location))',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithLocalOptionsExtensibleField, DuressAware',
        'Options': [
          {
            'Code': 'NewOption',
            'Name': 'Far enough'
          },
          {
            'Code': 'NewOption1',
            'Name': 'At this floor'
          }
        ],
        'DisplayField': 'Name',
        'Code': 'NewField3',
        'Name': 'Is it urgent?',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithOptionsFromMappingExtensibleField, DuressAware',
        'MappingCode': 'AlexaTaskParameters',
        'FilterByValueOfOtherField': null,
        'DisplayField': 'VALUE_RecipientSet',
        'Code': 'NewField4',
        'Name': 'Mapping',
        'Type': 2,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 0,
    'BoostedPriority': 9,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': true,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#f0d4af',
    'BackgroundColor': '#d69a40',
    'Color': '#9e6714',
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': true,
    'AllowMultiSelectOfRecipientsOnPortal': true,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': false,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'IGNITEMobileTask',
    'ShortName': 'IGNITE Mobile Task',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        '$type': 'DuressAware.SingleSelectWithLocationsExtensibleField, DuressAware',
        'DisplayField': 'Name',
        'Code': 'Location',
        'Name': 'Where are you? Here?',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithOptionsFromMappingExtensibleField, DuressAware',
        'MappingCode': 'Buildings',
        'FilterByValueOfOtherField': null,
        'DisplayField': 'value',
        'Code': 'Mapping',
        'Name': 'Building',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'String',
        'Name': 'Approve, youll do it',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Boolean',
        'Name': 'Are you around?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        '$type': 'DuressAware.SingleSelectWithLocalOptionsExtensibleField, DuressAware',
        'Options': [
          {
            'Code': 'NewOption',
            'Name': 'Basement'
          },
          {
            'Code': 'NewOption1',
            'Name': 'Surgery floor'
          }
        ],
        'DisplayField': 'Name',
        'Code': 'Local_Option',
        'Name': 'Select the floor for transporting',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 7,
    'BoostedPriority': 15,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': true,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': true,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': 'voo_voo',
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': true,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': true,
    'DisplayTaskMessageTextOnMessageView': true,
    'TrackTaskCommencement': true,
    'TaskScreenToShowAfterAccept': 2,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': false,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#b4edde',
    'BackgroundColor': '#258a73',
    'Color': '#195659',
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': true,
    'AllowMultiSelectOfRecipientsOnMobile': true,
    'AllowMultiSelectOfRecipientsOnPortal': true,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': false,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': '3bd074d3-b2da-4cef-8a01-ce2599ffc284',
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': 'IGNITE TOPIC instead of task name',
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': true
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'MaternityServices',
    'ShortName': 'Maternity Services',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'All clear',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'On my way',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'Name',
        'Name': 'Patient Name',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'DoB',
        'Name': 'Date of Birth',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'URN',
        'Name': 'UR Number',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'WardRoom',
        'Name': 'Ward/Room',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Notes',
        'Name': 'Notes/Comments',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 5,
    'BoostedPriority': 50,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#f241cf',
    'BackgroundColor': '#f241cf',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'NeedAWheechair',
    'ShortName': 'Need a wheechair',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': true,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        '$type': 'DuressAware.SingleSelectWithOptionsFromMappingExtensibleField, DuressAware',
        'MappingCode': 'AlexaTaskParameters',
        'FilterByValueOfOtherField': null,
        'DisplayField': 'RecipientSet',
        'Code': 'Mapping',
        'Name': 'Where do you need this at?',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 0,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': true,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': true,
    'DisplayTaskMessageTextOnMessageView': true,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#14b0cf',
    'BackgroundColor': '#68ada3',
    'Color': '#117a65',
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': true,
    'AllowMultiSelectOfRecipientsOnMobile': true,
    'AllowMultiSelectOfRecipientsOnPortal': true,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': false,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'NurseCall',
    'ShortName': 'Nurse Call',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'All clear',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'On my way',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 5,
    'BoostedPriority': 50,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': true,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#3891f0',
    'BackgroundColor': '#3891f0',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': true,
    'AllowMultiSelectOfRecipientsOnPortal': true,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'OrderlyRequest',
    'ShortName': 'Portering Request',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'All clear',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'On my way',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'RequestAction',
        'Name': 'Request/Action',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 4,
    'BoostedPriority': 50,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': true,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': 'sms_alert_2_daniel_simon'
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#14e0d9',
    'BackgroundColor': '#14e0d9',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'PatientCare_Doctor_',
    'ShortName': 'Patient Care - Doctor:',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 8,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': null,
    'BackgroundColor': '#0567fa',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'PatientReview',
    'ShortName': 'Patient Review',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': true,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Complete and Close',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 0,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': true,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': true,
    'DisplayTaskMessageTextOnMessageView': true,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': null,
    'BackgroundColor': '#f0aef5',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': true,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'PatientTransfer',
    'ShortName': 'Patient Transfer',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Mark as Completed',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'NameOfPatient',
        'Name': 'Name of Patient',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'DoB',
        'Name': 'Date of Birth',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'URN',
        'Name': 'UR Number',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'WheelChairRequired',
        'Name': 'Wheelchair Required',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'BedMoverRequired',
        'Name': 'Bed Mover Required',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'NurseEscortRequired',
        'Name': 'Nurse Escort Required',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'ContactPrecautions',
        'Name': 'Patient is on contact precautions',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'TrolleyRequired',
        'Name': 'Trolley required',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 2,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': true,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#ff8c08',
    'BackgroundColor': '#ff8c08',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': 'Reminder: please verify that the receiving ward is aware of the incoming transfer before raising the transfer task.',
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'PatientTurn',
    'ShortName': 'Patient Move/Turn',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        '$type': 'DuressAware.SingleSelectWithLocationsExtensibleField, DuressAware',
        'DisplayField': 'Name',
        'Code': 'Location',
        'Name': 'Location',
        'Type': 2,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Bariatric',
        'Name': 'Is Patient Bariatric?',
        'Type': 1,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': null,
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 0,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': false,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': false,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#379cb0',
    'BackgroundColor': '#379cb0',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'PerimeterBreach',
    'ShortName': 'Perimeter Breach',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'NameOfPatient',
        'Name': 'Name of Patient',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'SyringsAndNeedle',
        'Name': 'Syrings and needles required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'WaterAndSaline',
        'Name': 'Water and Saline 10ml Ampoules required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Note',
        'Name': 'Note',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [
      {
        'TimeOfDayCondition': null,
        'LocationGroupCodeCondition': null,
        'LocationGroupCodesCondition': [],
        'OriginalRecipientSetCondition': null,
        'RecipientSet': null,
        'RecipientSets': [
          {
            'Specifier': 'RoleInstanceGroup:AllStaff',
            'Responsibility': null
          }
        ]
      }
    ],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 4,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': null,
    'BackgroundColor': '#a8a5a5',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'RestockTreatmentRoom',
    'ShortName': 'Restock Treatment Room',
    'RequiredNumberOfRespondents': 0,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'SyringeAndNeedle',
        'Name': 'Syringes and needles required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'WaterAndSaline',
        'Name': 'Saline 10ml Ampules required?',
        'Type': 1,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Note',
        'Name': 'Notes/Other',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 4,
    'BoostedPriority': 5,
    'AllowPriorityBoost': false,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': null,
    'BackgroundColor': '#c2300b',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'TerminalClean',
    'ShortName': 'Terminal Clean',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'All clear',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'On my way',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        '$type': 'DuressAware.SingleSelectWithLocationsExtensibleField, DuressAware',
        'DisplayField': 'Name',
        'Code': 'Location',
        'Name': 'Location',
        'Type': 2,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'PatientName',
        'Name': 'PATIENT NAME',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'PatientNumber',
        'Name': 'PATIENT UR NUMBER',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'DATEOFBIRTH',
        'Name': 'DATE OF BIRTH',
        'Type': 0,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Wheelchair',
        'Name': 'Wheelchair',
        'Type': 1,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'Oxygen',
        'Name': 'Oxygen',
        'Type': 1,
        'IsRequired': true,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [
      {
        'TimeOfDayCondition': {
          'AtLeastThisManyMinutesAfterMidnight': 300,
          'FewerThanThisManyMinutesAfterMidnight': 900
        },
        'LocationGroupCodeCondition': null,
        'LocationGroupCodesCondition': [],
        'OriginalRecipientSetCondition': null,
        'RecipientSet': null,
        'RecipientSets': [
          {
            'Specifier': 'RoleInstance:EnvironmentalServiceAssistant',
            'Responsibility': null
          }
        ]
      }
    ],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 2,
    'BoostedPriority': 50,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': true,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 2,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#9e0cf2',
    'BackgroundColor': '#9e0cf2',
    'Color': '#ffffff',
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'TTWithTriggerAttached',
    'ShortName': 'TT with Trigger attached',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'Resolve',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'Accept',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        '$type': 'DuressAware.SingleSelectWithLocationsExtensibleField, DuressAware',
        'DisplayField': 'Name',
        'Code': 'Location',
        'Name': 'Set an area',
        'Type': 2,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'TriggerTestForIGNITE_Mobile',
    'RaiseNotificationsBasedOnTaskCompatibility': false,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': 'welcome-6sec.wav',
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': 'welcome-6sec.wav',
    'VibratePattern': '250:100:2',
    'DefaultPriority': 0,
    'BoostedPriority': 12,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': false,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': false,
    'ShowShortcutOnMainMenu': true,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': false,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': false,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 2,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': false,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': true,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#bbddf0',
    'BackgroundColor': '#4ec3e0',
    'Color': '#1c6b85',
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': null,
    'AssetPropertyLinking': null,
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': true,
    'AllowMultiSelectOfRecipientsOnPortal': true,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': false,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  },
  {
    'RecipientsPermittedToDeclineAvailableTask': null,
    'TaskTypeCode': 'UrgentNurseCall',
    'ShortName': 'Urgent Nurse Call',
    'RequiredNumberOfRespondents': 1,
    'ResolutionRequiresPin': false,
    'DisplayPriorityWhenResolved': 0,
    'DisplayPriorityWhenNotResolved': 0,
    'ShowOnDashboard': false,
    'ViewPageTitle': null,
    'MaxDisplayAgeWhenResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenNotResolved': '-24855.03:14:08',
    'MaxDisplayAgeWhenResolvedSeconds': -2147483648,
    'MaxDisplayAgeWhenNotResolvedSeconds': -2147483648,
    'StatusIndicatorWhenResolved': 'resolved',
    'StatusIndicatorWhenNotResolvedOrAcknowledged': 'new',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByThisRecipient': 'acknowledged',
    'StatusIndicatorWhenNotResolvedButAcknowledgedByAnotherRecipient': 'new',
    'NameOfResolveOverallCallOperation': 'All clear',
    'ResponseToResolveOverallCallOperation': null,
    'NameOfConfirmCallOperation': 'Confirm',
    'NameOfAcknowledgeMessageAtRecipientLevelOperation': 'Acknowledge',
    'ResponseToAcknowledgeMessageAtRecipientLevelOperation': null,
    'NameOfAcceptCallOperation': 'On my way',
    'ViewToDisplayInResponseToNewAlert': 1,
    'ActionToPerformOnMenuItemSelect': 0,
    'ExtensibleFields': [
      {
        'Code': 'NewField1',
        'Name': 'This is the 1st test field',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      },
      {
        'Code': 'NewField2',
        'Name': 'This is the 2nd',
        'Type': 0,
        'IsRequired': false,
        'RelatedTaskFactor': false,
        'DisplayConditions_ValueOfOtherExtensibleFields': []
      }
    ],
    'DefaultRecipientSetRules': [
      {
        'TimeOfDayCondition': null,
        'LocationGroupCodeCondition': null,
        'LocationGroupCodesCondition': [],
        'OriginalRecipientSetCondition': null,
        'RecipientSet': null,
        'RecipientSets': [
          {
            'Specifier': 'RoleInstanceGroup:MyTestCodeBlackGroup',
            'Responsibility': null
          }
        ]
      }
    ],
    'DefaultConfirmerSetRules': [],
    'DefaultCompleterSetRules': [],
    'DefaultInformeeSetRules': [],
    'RespondentsToAddOnConfirmation': [],
    'InformeesToAddOnConfirmation': [],
    'CompletersToAddOnConfirmation': [],
    'AutomaticallyAcknowledgeCallOnConfirmedDeliveryOfNotification': false,
    'AllowListenIn': false,
    'TriggerSetCode': 'None',
    'RaiseNotificationsBasedOnTaskCompatibility': true,
    'Ringtone': 'Pulse1.raw',
    'ConfirmedRingtone': null,
    'TaskCompletedRingtone': 'Pulse1.raw',
    'SpectralinkRingtone': null,
    'ConfirmedSpectralinkRingtone': null,
    'TaskCompletedSpectralinkRingtone': null,
    'VibratePattern': '250:100:2',
    'DefaultPriority': 9,
    'BoostedPriority': 50,
    'AllowPriorityBoost': true,
    'AcceptOperationResolvesCall': true,
    'SupportsConfirmation': false,
    'ResourcesEligibleToConfirm': null,
    'DefaultConfirmerSet': null,
    'DispatcherSet': null,
    'RejectCallsToActionWithSameMessageTextRaisedWithin5Seconds': false,
    'AcceptButtonShouldBeLeftmostOnAcceptableTaskMessageView': true,
    'ShowShortcutOnMainMenu': false,
    'StatusSpecificCallToActionBehaviours': [
      {
        'Status': 1,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 2,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 3,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 4,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 450,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 5,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 6,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 601,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      },
      {
        'Status': 7,
        'RenotificationInterval': null,
        'RenotificationIntervalInSeconds': null,
        'RenotificationIntervalForInformees': null,
        'RenotificationIntervalForInformeesInSeconds': null,
        'MaxRenotifications': null
      }
    ],
    'NewIncidentMobileRingtone': null,
    'TaskNotificationTypeAndMobileRingtoneMappings': [
      {
        'TaskNotificationType': 1,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 2,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 3,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 4,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 5,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 6,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 7,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 8,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 9,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 10,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 18,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 11,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 12,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 13,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 14,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 15,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 16,
        'Ringtone': null
      },
      {
        'TaskNotificationType': 17,
        'Ringtone': null
      }
    ],
    'IncludeMessageTextInAvailableTaskNotification': true,
    'TriggerDisplayOnMerlonAnnunciator': false,
    'DisplayTaskNotesOnTaskView': false,
    'DisplayTaskMessageTextOnTaskView': true,
    'DisplayTaskNotesOnMessageView': false,
    'DisplayTaskMessageTextOnMessageView': false,
    'TrackTaskCommencement': false,
    'TaskScreenToShowAfterAccept': 0,
    'OmitNewTaskAvailableMessageFromNotificationText': false,
    'DisplayTaskInfoOnCallToActionNotificationView': true,
    'LabelForMessageTextOnAvailableCallToActionNotificationView': 'Message',
    'NotificationPageTitleForNewTaskAvailableMessages': 'Message details',
    'TrackTaskOverdue': false,
    'PermitDecline': true,
    'PermitManualResolve': true,
    'NameOfDeclineAvailableCallOperation': null,
    'NotificationTextWhenAnotherRecipientTextDeclines': null,
    'CreateCiscoSparkRoom': false,
    'CreateCiscoWebExTeamsSpace': false,
    'EnableCallToActionMessages': false,
    'AutomaticallyCreateConversationForTasksOfThisType': false,
    'PostRoomCreatedMessageToRoom': false,
    'PostConversationCreatedMessageToConversation': true,
    'PostNotesMessageToRoom': false,
    'PostNotesMessageToConversation': true,
    'RestrictRaiseToSpecifiers': [],
    'SwatchColour': '#ff0000',
    'BackgroundColor': '#068bb8',
    'Color': null,
    'SuppressNotificationsToRoleInstanceOfPhoneThatRaisedCall': false,
    'IsMessageFormatOverridden': false,
    'MessageFormat': null,
    'ProcessGuidanceUrl': null,
    'ProcessGuidanceLabel': null,
    'TaskRaiseGuidance': null,
    'AssetLinking': {
      'Obligation': 0,
      'Title': 'Subject asset'
    },
    'AssetPropertyLinking': {
      'Obligation': 0,
      'Title': 'Subject asset property'
    },
    'NotifyRecipientsWhenSubjectAssetMoves': false,
    'IncludeNotesInAvailableTaskNotification': false,
    'AllowMultiSelectOfRecipientsOnMobile': false,
    'AllowMultiSelectOfRecipientsOnPortal': false,
    'InitialViewForTask': 1,
    'SuppressDisplayOfHighPriorityTaskIndicator': false,
    'AlwaysAllowRequestorToComplete': true,
    'WhenRaisedFromMobileSetRequestorAsOnlyCompleter': false,
    'AutomaticallyAddCreatorToCallAndAcknowledge': false,
    'CtaPhaseRuleSetId': null,
    'CtaCommunicationStrategyId': null,
    'AllHandsRequestCompletedTaskText': null,
    'AllHandsRequestCancelledTaskText': null,
    'ConversationTopic': null,
    'CallConfirmedMessageFormat': null,
    'SendNotificationOnTaskCompletion': true,
    'ForceVisibilityOfTasksOfThisTypeOnPortal': false,
    'CallToActionMessageTextFormat': null,
    'AccessToConversation': 0,
    'NotifyRequestorWhenTaskIsManuallyAssignedOrUnassigned': false
  }
];

export const constLocations = [
  {
    'Code': 'External_Map_12_Zone_1653',
    'Name': 'Room IPC.003',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1654',
    'Name': 'Room IPC.004',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1655',
    'Name': 'Room IPC.002',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1656',
    'Name': 'Room IPC.001',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1657',
    'Name': 'Room IPC.021',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1658',
    'Name': 'Staircase 4A',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1659',
    'Name': 'Room IPC.023',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1660',
    'Name': 'Room IPC.113',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1661',
    'Name': 'Room IPC.006',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1662',
    'Name': 'Room IPC.007',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1663',
    'Name': 'Room IPC.008',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1664',
    'Name': 'Room IPC.009',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1665',
    'Name': 'Room IPC.010',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1666',
    'Name': 'Room IPC.011',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1667',
    'Name': 'Room IPC.012',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1668',
    'Name': 'Room IPC.013',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1669',
    'Name': 'Bariatric IPC.014',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1670',
    'Name': 'Room IPC.026',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1671',
    'Name': 'Room IPC.015',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1672',
    'Name': 'Room ISO/BAR IPC.016',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1673',
    'Name': 'IPC Staff Lounge',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1674',
    'Name': 'Transit Lounge',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1675',
    'Name': 'Cleaner IPC.090',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1676',
    'Name': 'WC ACC EMT.034',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1677',
    'Name': 'Staff Base North-West',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1678',
    'Name': 'Clean Utility IPC.070',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1679',
    'Name': 'WC ST IPC.102',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1680',
    'Name': 'Medication IPC.069',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1681',
    'Name': 'Medication Room Corridor',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1682',
    'Name': 'Switch PLSS.0345',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1683',
    'Name': 'Office IPC.097',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1684',
    'Name': 'Workroom',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1685',
    'Name': 'Pantry',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1686',
    'Name': 'WC PUB IPC.087',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1687',
    'Name': 'Patient Lounge Corridor',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1688',
    'Name': 'PAT.219',
    'LabelOverride': null,
    'Groups': [
      'All',
      'InpatientUnitDepartmentWard3A'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1689',
    'Name': 'Room IPC.024',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1690',
    'Name': 'Room IPC.026',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1691',
    'Name': 'WC ST IPC.108',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1692',
    'Name': 'Interview IPC.095',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1693',
    'Name': 'Equip Store',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1694',
    'Name': 'Interview IPC.094',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1695',
    'Name': 'Dirty Utility IPC.072',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1696',
    'Name': 'Disposal IPC.089',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1697',
    'Name': 'Staff Overnight MSO.277',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1698',
    'Name': 'Staff Overnight MSO.276',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1699',
    'Name': 'Switch PLSS.0341',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1700',
    'Name': 'Pantry',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1701',
    'Name': 'WC ACC CTU.053',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1702',
    'Name': 'Staircase 3A Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1703',
    'Name': 'Bev Bay',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1704',
    'Name': 'Bed Bay SDM.224',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1705',
    'Name': 'WC PAT SDM.225',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1706',
    'Name': 'Bed Bay SDM.223',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1707',
    'Name': 'WC PAT SDM.199',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1708',
    'Name': 'Bed Bay SDM.C.027',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1709',
    'Name': 'WC PAT SDM.197',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1710',
    'Name': 'EMT Staff Station',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1711',
    'Name': 'Switch PLSS.0339',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1712',
    'Name': 'Cleaner FM.038',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1713',
    'Name': 'Dirty Utility SDM.144',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1714',
    'Name': 'SDM Workroom & Staff Station',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1715',
    'Name': 'Clean Utility SDM.143',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1716',
    'Name': 'Bed Bay SDM.125',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1717',
    'Name': 'WC PAT SDM.198',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1718',
    'Name': 'Room SDM.126',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1719',
    'Name': 'WC ST SDM.189',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1720',
    'Name': 'WC ST SDM.190',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1721',
    'Name': 'Phlebotomy SDM.024',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1722',
    'Name': 'Office SDM.170',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1723',
    'Name': 'Office SDM.172',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1724',
    'Name': 'Medication SDM.142',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1725',
    'Name': 'Corridor to Room 126',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1726',
    'Name': 'Ante Room SDM.128',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1727',
    'Name': 'Staircase 3A',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1728',
    'Name': 'Balcony',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1729',
    'Name': 'SDM Patient Lounge',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1730',
    'Name': 'Switch PLSS.0338',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1731',
    'Name': 'Staircase 2',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1732',
    'Name': 'Food Bay',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1733',
    'Name': 'Treatment SDM.026',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1734',
    'Name': 'Treatment SDM.025',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1735',
    'Name': 'Treatment SDM.027',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1736',
    'Name': 'Treatment SDM.028',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1737',
    'Name': 'Interview SDM.020',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1738',
    'Name': 'Office SDM.171',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1739',
    'Name': 'Phlebotomy SDM.023',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1740',
    'Name': 'SDM Workstation',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1741',
    'Name': 'SDM Reception',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1742',
    'Name': 'Corridor to Service Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1743',
    'Name': 'Same Day Medical Corridor',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1744',
    'Name': 'SDM Workstation Corridor',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1745',
    'Name': 'Interview SDM.021',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1746',
    'Name': 'WC ST SDM.191',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1747',
    'Name': 'Waiting Area SDM.007(2)',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1748',
    'Name': 'WC PAT CTU.100',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1749',
    'Name': 'CTU Corridor North-West',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1750',
    'Name': 'Chair Bay CTU.083(1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1751',
    'Name': 'Chair Bay CTU.021',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1752',
    'Name': 'Chair Bay CTU.016',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1753',
    'Name': 'Chair Bay CTU.015',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1754',
    'Name': 'CTU Staff Lounge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1755',
    'Name': 'Seminar Room CTU.069',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1756',
    'Name': 'SDM Workstation',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1757',
    'Name': 'Office SDM.169',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1758',
    'Name': 'WC ACC IPC.086',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1759',
    'Name': 'Disposal CTU.065',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1760',
    'Name': 'Cleaner CTU.066',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1761',
    'Name': 'Equip Store CTU.067',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1762',
    'Name': 'Corridor to Public Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1763',
    'Name': 'Clean Utility Store CTU.063',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1764',
    'Name': 'WC PAT CTU.050',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1765',
    'Name': 'WC CTU.081',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1766',
    'Name': 'WC ACC CTU.088',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1767',
    'Name': 'Office CTU.073',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1768',
    'Name': 'Medication CTU.062',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1769',
    'Name': 'Dirty Utility CTU.064',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1770',
    'Name': 'CTU Workstation',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1771',
    'Name': 'Staff Base',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1772',
    'Name': 'CTU Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1773',
    'Name': 'Treatment CTU.039',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1774',
    'Name': 'Consult CTU.007',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1775',
    'Name': 'Consult CTU.006',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1776',
    'Name': 'Consult CTU.005',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1777',
    'Name': 'Consult CTU.004',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1778',
    'Name': 'Chair Bay CTU.014',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1779',
    'Name': 'Consult SDM.014',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1780',
    'Name': 'WC PAT CTU.049',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1781',
    'Name': 'Consult SDM.010',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1782',
    'Name': 'Consult SDM.015',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1783',
    'Name': 'Consult SDM.011',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1784',
    'Name': 'Consult SDM.016',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1785',
    'Name': 'Consult SDM.012',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1786',
    'Name': 'Consult SDM.017',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1787',
    'Name': 'Consult SDM.013',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1788',
    'Name': 'Consult SDM.009',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1789',
    'Name': 'WC ST CTU.050',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1790',
    'Name': 'WC PUB SDM.163',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1791',
    'Name': 'SDM Workbase',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1792',
    'Name': 'SDM Reception',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1793',
    'Name': 'Atrium Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1794',
    'Name': 'Electrical Riser PLSS.0306',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1795',
    'Name': 'Electrical PLSS.0305',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1796',
    'Name': 'Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1797',
    'Name': 'Comms PLSS.0330',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1798',
    'Name': 'Mech Riser PLSS.0382',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1799',
    'Name': 'Waiting Area SDM.008(1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1800',
    'Name': 'WC ACC SDM.209',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1801',
    'Name': 'Waiting Area SDM.008(2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1802',
    'Name': 'Seminar Room SDM.184',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1803',
    'Name': 'Room SDM.105',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1804',
    'Name': 'Room SDM.104',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1805',
    'Name': 'Room SDM.103',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1806',
    'Name': 'Room SDM.102',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1807',
    'Name': 'PHA Workstation',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1808',
    'Name': 'WC PAT SDM.110',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1809',
    'Name': 'Sub Dirty Utility SDM.119',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1810',
    'Name': 'Staff Change 3',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1811',
    'Name': 'Staff Prop',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1812',
    'Name': 'WC ST SDM.188',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1813',
    'Name': 'WC PHA.083',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1814',
    'Name': 'Staff Change 1',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1815',
    'Name': 'Staff Change 2',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1816',
    'Name': 'Switch PLSS.0318',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1817',
    'Name': 'Storage PHA.030',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1818',
    'Name': 'Cytotoxic Pharmacy',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1819',
    'Name': 'Cytotoxic D/D/M',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1820',
    'Name': 'Plant PLSS.0331',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1821',
    'Name': 'Cleaner SDM.155',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1822',
    'Name': 'Disposal SDM.154',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1823',
    'Name': 'Riser PLSS.0334',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1824',
    'Name': 'SDM Workroom',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1825',
    'Name': 'SDM Staff Base',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1826',
    'Name': 'Bed Bay SDM.C.007',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1827',
    'Name': 'Bed Bay SDM.042',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1828',
    'Name': 'WC PAT SDM.205',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1829',
    'Name': 'Bed Bay SDM.043',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1830',
    'Name': 'Bed Bay SDM.043',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1831',
    'Name': 'Medication SDM.095',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1832',
    'Name': 'WC ACC SDM.167',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1833',
    'Name': 'Dirty Utility SDM.086',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1834',
    'Name': 'Bed Bay East SDM.041',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1835',
    'Name': 'Bed Bay North SDM.041',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1836',
    'Name': 'WC PAT SDM.216',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1837',
    'Name': 'WC ACC SHWR SDM.215',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1838',
    'Name': 'Storage SDM.149',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1839',
    'Name': 'WC PAT SDM.201',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1840',
    'Name': 'Medication SDM.194',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1841',
    'Name': 'Dirty Utility SDM.097',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1842',
    'Name': 'Pantry SDM.153',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1843',
    'Name': 'WC PAT SDM.202',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1844',
    'Name': 'WC PAT SDM.196',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1845',
    'Name': 'Bed Bay SDM.039',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1846',
    'Name': 'WC PAT SDM.195',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1847',
    'Name': 'Room SDM.033',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1848',
    'Name': 'Room SDM.037',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1849',
    'Name': 'Room SDM.032',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1850',
    'Name': 'Room SDM.031',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1851',
    'Name': 'Room SDM.030',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1852',
    'Name': 'Chemotherapy Corridor South-East',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1853',
    'Name': 'SDM Staff Base',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1854',
    'Name': 'Bed Bay SDM.221',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1855',
    'Name': 'WC PAT SDM.156',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1856',
    'Name': 'C/U Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1857',
    'Name': 'Bed Bay SDM.044',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1858',
    'Name': 'Room IPC.022',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1859',
    'Name': 'Ensuite IPC.046',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1860',
    'Name': 'Balcony',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1861',
    'Name': 'Patient Lounge',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1862',
    'Name': 'Riser PLSS.0346',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1863',
    'Name': 'Riser PLSS.0352',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1864',
    'Name': 'Dirty Utility IPC.071',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1865',
    'Name': 'Principal Staff',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1866',
    'Name': 'Room IPC.025',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1867',
    'Name': 'Ensuite IPC.049',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1868',
    'Name': 'IPC Workstation',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1869',
    'Name': 'Seminar Room IPC.096',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1870',
    'Name': 'Laundry',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1871',
    'Name': 'Comms PLSS.0340',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1872',
    'Name': 'Elec Riser PLSS.0342',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1873',
    'Name': 'Room CTU.099',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1874',
    'Name': 'Ensuite CTU.027',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1875',
    'Name': 'Riser PLSS.0343',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1876',
    'Name': 'Void PLSS.0357',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1877',
    'Name': 'Chair Bay CTU.083 (2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1878',
    'Name': 'Medical IPU Corridor North-West',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Ward_5_2',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1879',
    'Name': 'Corridor to Rooms 19, 21, 24',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1880',
    'Name': 'Corridor to Rooms 8-14',
    'LabelOverride': null,
    'Groups': [
      'InpatientUnitDepartmentWard3A',
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1881',
    'Name': 'Lifts 14-22',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1882',
    'Name': 'Meeting Room SDM.022',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1883',
    'Name': 'Treatment Room Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1884',
    'Name': 'Corridor to Bed Bays 223-224',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1885',
    'Name': 'Service Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1886',
    'Name': 'Flue Riser PLSS.0312',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1887',
    'Name': 'Public Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1888',
    'Name': 'Lifts 7-10',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1889',
    'Name': 'Flue Riser PLSS.0304',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1890',
    'Name': 'Pipe Riser PLSS.0307',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1891',
    'Name': 'Room ISO SDM.127',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1892',
    'Name': 'Ensuite ISO SDM.133',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1893',
    'Name': 'SDM Staff Lounge',
    'LabelOverride': null,
    'Groups': [
      'SameDayDepartment',
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1894',
    'Name': 'Clean Utility SDM.M10',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1895',
    'Name': 'WC PUB SDM.162',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1896',
    'Name': 'WC ACC SDM.168',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1897',
    'Name': 'WC PUB SDM.160',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1898',
    'Name': 'Interview SDM.019',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1899',
    'Name': 'SDM Workstation',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1900',
    'Name': 'SDM Staff Base Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1901',
    'Name': 'Staircase 1',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1902',
    'Name': 'Lifts 1-6',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1903',
    'Name': 'Service Lobby',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1904',
    'Name': 'Prep Lab & Freezer Room',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1905',
    'Name': 'WC PAT CTU.048',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1906',
    'Name': 'Consult SDM.018',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1907',
    'Name': 'WC ACC SDM.164',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1908',
    'Name': 'WC PUB SDM.161',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1909',
    'Name': 'Cytotoxic PHA.M16',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1910',
    'Name': 'Service Lobby Corridor North',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1911',
    'Name': 'WC PHA.082',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1912',
    'Name': 'Office PHA.056',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1913',
    'Name': 'Airlock PHA.C.0395',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1914',
    'Name': 'Staff Change Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1915',
    'Name': 'Medication SDM.117',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1916',
    'Name': 'Bay Equip SDM.091',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1917',
    'Name': 'Room SDM.101',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1918',
    'Name': 'Airlock SDM.C.019',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1919',
    'Name': 'Clean Utility SDM.118',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1920',
    'Name': 'Staff Base',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1921',
    'Name': 'Apheresis Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1922',
    'Name': 'CTU Corridor West',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1923',
    'Name': 'CTU Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1924',
    'Name': 'Freezer Room Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1925',
    'Name': 'Same Day Consult Corridor',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1926',
    'Name': 'Lift Lobby Corridor North',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1927',
    'Name': 'Comms PLSS.0337',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1928',
    'Name': 'Bed Bay SDM.040',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1929',
    'Name': 'Bed Bay South SDM.041',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1930',
    'Name': 'Chemotherapy Corridor South',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1931',
    'Name': 'Chemotherapy Corridor East',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Level2Corridor'
    ]
  },
  {
    'Code': 'External_Map_12_Zone_1932',
    'Name': 'WC PAT SDM.207',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2207',
    'Name': 'Room OPP.109',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2208',
    'Name': 'Room OPP.110',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2209',
    'Name': 'Room OPP.111',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2210',
    'Name': 'Room OPP.112',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2211',
    'Name': 'Room OPP.113',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2212',
    'Name': 'Room OPP.122',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2213',
    'Name': 'Staircase 4A',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2214',
    'Name': 'Room OPP.114',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2215',
    'Name': 'Room OPP.121',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2216',
    'Name': 'Cleaner OPP.117',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2217',
    'Name': 'Disposal OPP.123',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2218',
    'Name': 'Laundry',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2219',
    'Name': 'Linen',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2220',
    'Name': 'Bedroom 2 OPP.102',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2221',
    'Name': 'Ensuite OPP.102',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2222',
    'Name': 'Lounge',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2223',
    'Name': 'Room OPP.103',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2224',
    'Name': 'Room OPP.104',
    'LabelOverride': null,
    'Groups': [
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2225',
    'Name': 'Room OPP.101',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2226',
    'Name': 'Room OPP.105',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2227',
    'Name': 'Room OPP.106',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2228',
    'Name': 'Room OPP.107',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2229',
    'Name': 'Room OPP.108',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2230',
    'Name': 'Lounge Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2231',
    'Name': 'Lobby Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2232',
    'Name': 'CON ACS.003',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2233',
    'Name': 'INT OTP.003',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2234',
    'Name': 'INT OTP.W.007',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2235',
    'Name': 'Office ACS.056',
    'LabelOverride': null,
    'Groups': [
      'PerimeterWorkstations',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2236',
    'Name': 'Office OTP.W.005',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2237',
    'Name': 'Office OTP.W.006',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2238',
    'Name': 'Workstations & Team Table',
    'LabelOverride': null,
    'Groups': [
      'PerimeterWorkstations',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2239',
    'Name': 'Workstations',
    'LabelOverride': null,
    'Groups': [
      'PerimeterWorkstations',
      'All',
      'Ward_5_2'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2240',
    'Name': 'Shell West',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2241',
    'Name': 'Meeting Room 01.3.079',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2242',
    'Name': 'Cleaner 01.2.003',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2243',
    'Name': 'WC ACC 01.2.004',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2244',
    'Name': 'Comms PLSS.0147',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2245',
    'Name': 'Switch PLSS.0105',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2246',
    'Name': 'Reception & Waiting Area',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2247',
    'Name': 'Maggies Centre',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2248',
    'Name': 'WC ACC 01.2.005',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2249',
    'Name': 'Pipe Riser PLSS.0109',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2250',
    'Name': 'Staircase 3A',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2251',
    'Name': 'Lifts 15-22',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2252',
    'Name': 'Lift 14',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2253',
    'Name': 'Staircase 2',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2254',
    'Name': 'Lifts 7-13',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2255',
    'Name': 'Pipe Riser PLSS.0108',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2256',
    'Name': 'Pipe Riser PLSS.0107',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2257',
    'Name': 'Electrical Room PLSS.0105',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2258',
    'Name': 'Flue Riser PLSS.0104',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2259',
    'Name': 'Lifts 1-6',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2260',
    'Name': 'Staircase 1',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2261',
    'Name': 'Future Comms SHE.0106',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2262',
    'Name': 'Shell North-East',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2263',
    'Name': 'Future Plant East',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2264',
    'Name': 'Terrace',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2265',
    'Name': 'Public Lounge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2266',
    'Name': 'Country Patient Accom Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2267',
    'Name': 'SWB PLSS.0133',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2268',
    'Name': 'Bedroom 1 OPP.102',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2269',
    'Name': 'CON ACS.002',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2270',
    'Name': 'Circ 01.3.TO6',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2271',
    'Name': 'Service Lobby',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2272',
    'Name': 'Future Plant West',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2273',
    'Name': 'Public Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2274',
    'Name': 'Lobby',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2275',
    'Name': 'Staircase',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2276',
    'Name': 'Shell South-East',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2277',
    'Name': 'Staircase 2 Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_14_Zone_2278',
    'Name': 'AYA Lounge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1000',
    'Name': 'Cleaner POS.197',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1001',
    'Name': 'ST WC POS.233',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1002',
    'Name': 'Sterile Stock Storage',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1003',
    'Name': 'Anaesthetic Storage / Workroom',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1004',
    'Name': 'North Corridor',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1005',
    'Name': 'Link Bridge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1006',
    'Name': 'Sterile Core Corridor',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1007',
    'Name': 'Staircase 3A Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1008',
    'Name': 'Service Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1009',
    'Name': 'Bump POS.W.001',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1010',
    'Name': 'Staff Interview',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1011',
    'Name': 'Seminar Room POS.224',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1012',
    'Name': 'Patient Belongings',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1013',
    'Name': 'Office POS.243',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1014',
    'Name': 'Office POS.215',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1015',
    'Name': 'Office POS.214',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1016',
    'Name': 'Office POS.212',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1017',
    'Name': 'South Offices Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1018',
    'Name': 'Waiting Area POS.283',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1019',
    'Name': 'ACC WC POS.029',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1020',
    'Name': 'Patient Belongings Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1021',
    'Name': 'CPX Testing',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1022',
    'Name': 'Comms PLSS.0638',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1023',
    'Name': 'SWB PLSS.0623',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1024',
    'Name': 'Hold 5',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1025',
    'Name': 'Hold 2',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1026',
    'Name': 'Hold 1',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1027',
    'Name': 'PAT WC POS.200',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1028',
    'Name': 'Hold 11',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1029',
    'Name': 'Hold 12',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1030',
    'Name': 'B3-5 (S.3)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1031',
    'Name': 'PAT WC POS.026',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1032',
    'Name': 'Hold 6',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1033',
    'Name': 'C/U',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1034',
    'Name': 'Hold 10',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1035',
    'Name': 'Hold 9',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1036',
    'Name': 'Hold 8',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1037',
    'Name': 'Staff Station Corridor East',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1038',
    'Name': 'Staff Station POS.015',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1039',
    'Name': 'Staff Station Corridor West',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1040',
    'Name': 'Eq. Bay & Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1041',
    'Name': 'Staff Station POS.239',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1042',
    'Name': 'Hold 7',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1043',
    'Name': 'WC/SHR POS.124',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1044',
    'Name': 'Iso Recovery 1',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1045',
    'Name': 'Iso Recovery 2',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1046',
    'Name': 'Iso Recovery Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1047',
    'Name': 'Theatre 4',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1048',
    'Name': 'Anaes POS.039',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1049',
    'Name': 'Medication Store',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1050',
    'Name': 'Anaes POS.038',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1051',
    'Name': 'Exit Bay POS.055',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1052',
    'Name': 'Exit Bay POS.056',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1053',
    'Name': 'Clean Up POS.M12',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1054',
    'Name': 'Anaes POS.041',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1055',
    'Name': 'Exit Bay POS.057',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1056',
    'Name': 'Anaes POS.040',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1057',
    'Name': 'Exit Bay POS.058',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1058',
    'Name': 'Minor Equipment Store',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1059',
    'Name': 'Exit Bay POS.061',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1060',
    'Name': 'Clean Up POS.142',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1061',
    'Name': 'Exit Bay POS.060',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1062',
    'Name': 'Anaes POS.044',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1063',
    'Name': 'CSSD Satellite Support',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1064',
    'Name': 'Sterilisation Zone',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1065',
    'Name': 'Theatre 5',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1066',
    'Name': 'Anaes POS.045',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1067',
    'Name': 'Anaes POS.043',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1068',
    'Name': 'Brachy Control POS.064',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1069',
    'Name': 'Procedure (Shielded)',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1070',
    'Name': 'Future MRI (Shielded)',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1071',
    'Name': 'Future Bay',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1072',
    'Name': 'Future Control',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1073',
    'Name': 'Theatre 6 (Shielded)',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1074',
    'Name': 'Clean Up POS.143',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1075',
    'Name': 'Brachy Control POS.063',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1076',
    'Name': 'North-East Corridor',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1077',
    'Name': 'Hub Control Corridor Corridor East',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1078',
    'Name': 'Tissue Collection',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1079',
    'Name': 'Disposal POS.194',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1080',
    'Name': 'Staircase 1',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1081',
    'Name': 'Electrical PLSS.0605',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1082',
    'Name': 'Electrical Riser PLSS.0606',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1083',
    'Name': 'Gas Bottle',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1084',
    'Name': 'Male Staff Change',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1085',
    'Name': 'Cleaner POS.191',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1086',
    'Name': 'Equipment Store',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1087',
    'Name': 'Plant 6.POS.195',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1088',
    'Name': 'Staff Lounge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1089',
    'Name': 'B14-16 (S.2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1090',
    'Name': 'B11-13 (S.2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1091',
    'Name': 'B8-10 (S.2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1092',
    'Name': 'B5-7 (S.2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1093',
    'Name': 'B10-12 (S.1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1094',
    'Name': 'B7-10 (S.1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1095',
    'Name': 'B4-6 (S.1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1096',
    'Name': 'B2-3 (S.1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1097',
    'Name': 'WC/SHR POS.123',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1098',
    'Name': 'Stage 2 - 16 B Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1099',
    'Name': 'B2-4 (S.2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1100',
    'Name': 'B14-16 (S.3)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1101',
    'Name': 'Staff Station & Stage 1 - 13 B Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1102',
    'Name': 'B13 (S.1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1103',
    'Name': 'B1 (S.1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1104',
    'Name': 'PAT WC POS.027',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1105',
    'Name': 'Corridor to Lift Lobby South',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1106',
    'Name': 'Riser PLSS.0608',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1107',
    'Name': 'Corridor to Lift Lobby North',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1108',
    'Name': 'Corridor / Write Up',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1109',
    'Name': 'Lift Lobby / Atrium',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1110',
    'Name': 'Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1111',
    'Name': 'Void',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1112',
    'Name': 'Room IPA.022',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1113',
    'Name': 'Surgical IPU Corridor South',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1114',
    'Name': 'Riser PLSS.0651',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1115',
    'Name': 'Room IPA.013',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1116',
    'Name': 'Surgical IPU Corridor North-West',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1117',
    'Name': 'Surgical IPU Corridor North',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1118',
    'Name': 'Riser PLSS.0650(1)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1119',
    'Name': 'C/U IPA.070',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1120',
    'Name': 'Balcony',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1121',
    'Name': 'Room IPA.026',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1122',
    'Name': 'Room IPA.019',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1123',
    'Name': 'Room IPA.012',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1124',
    'Name': 'Ens Iso/Bar IPA.041',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1125',
    'Name': 'Room Iso/Bar IPA.015',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1126',
    'Name': 'Corridor to Rooms 15-16',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1127',
    'Name': 'Disposal IPA.089',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1128',
    'Name': 'Staircase 3A',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1129',
    'Name': 'Pipe Riser PLSS.0609',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1130',
    'Name': 'Lifts 14-22',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1131',
    'Name': 'Plant PLSS.0641',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1132',
    'Name': 'Disposal POS.192',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1133',
    'Name': 'Workstations South Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1134',
    'Name': 'ACC WC POS.028 & PAT WC',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1135',
    'Name': 'General Waiting Area',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1136',
    'Name': 'Hold 4',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1137',
    'Name': 'Hold 3',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1138',
    'Name': 'Reception',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1139',
    'Name': 'Sterile Core POS.174',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1140',
    'Name': 'Theatre 2',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1141',
    'Name': 'Theatre 3',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1142',
    'Name': 'Theatre 1',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1143',
    'Name': 'Non-Sterile Storage',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1144',
    'Name': 'Void',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1145',
    'Name': 'Void',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1146',
    'Name': 'Corridor to Link Upper',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1147',
    'Name': 'Sterile Core POS.175',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1148',
    'Name': 'Endos. Cleanup',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1149',
    'Name': 'Procedure (Endoscopy)',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1150',
    'Name': 'Anaes POS.042',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1151',
    'Name': 'Operating Area Corridor',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1152',
    'Name': 'Hub Control',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1153',
    'Name': 'Peri-Operative Suite Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1154',
    'Name': 'Female Staff Change',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1155',
    'Name': 'Lift Lobby',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1156',
    'Name': 'Lifts 7-10',
    'LabelOverride': null,
    'Groups': [
      'All',
      'AtriumLevel3',
      'AtriumLevel3b'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1157',
    'Name': 'Lifts 1-6',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1158',
    'Name': 'Pipe Riser PLSS.0607',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1159',
    'Name': 'Riser PLSS.0634',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1160',
    'Name': 'Comms PLSS.0630',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All',
      'AtriumLevel3'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1161',
    'Name': 'Hub Control Corridor',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1162',
    'Name': 'Scrub Corridor',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1163',
    'Name': 'Store Major Equipment',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1164',
    'Name': 'Service Lobby',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1165',
    'Name': 'Flue Riser PLSS.0604',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1166',
    'Name': 'B1-2 (S.3)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1167',
    'Name': 'CC POS.264-5',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1168',
    'Name': 'Staircase 2',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1169',
    'Name': 'Eq Bay POS.126',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1170',
    'Name': 'SouthCorridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1171',
    'Name': 'Stage 1 - 13 B Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1172',
    'Name': 'SWB PLSS.0615',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1173',
    'Name': 'Brachy Seed',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1174',
    'Name': 'Dirty Utility POS.M17',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1175',
    'Name': 'Staff Station & Stage 2 - 16 B Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1176',
    'Name': 'B-1 (S.2)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1177',
    'Name': 'B6-9 (S.3)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1178',
    'Name': 'B10-13 (S.3)',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1179',
    'Name': 'Stage 3 - 16 B Corridor ',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1180',
    'Name': 'Stage 3 - 16 B Corridors',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1181',
    'Name': 'PAT WC POS.201',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_1182',
    'Name': 'Medication Store POS.181',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_938',
    'Name': 'Room IPA.003',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_939',
    'Name': 'Room IPA.002',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_940',
    'Name': 'Room IPA.001',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_941',
    'Name': 'Room IPA.021',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_942',
    'Name': 'Patient Lounge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_943',
    'Name': 'WC PUB IPA.087',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_944',
    'Name': 'Room IPA.023',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_945',
    'Name': 'Room IPA.005',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_946',
    'Name': 'Room IPA.006',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_947',
    'Name': 'Room IPA.007',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_948',
    'Name': 'Room IPA.008',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_949',
    'Name': 'Room IPA.009',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_950',
    'Name': 'Room IPA.010',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_951',
    'Name': 'Bariatric IPA.004',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_952',
    'Name': 'Ensuites Bariatric',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_953',
    'Name': 'Bariatric IPA.014',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_954',
    'Name': 'Staff Base North-West Upper',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_955',
    'Name': 'Dirty Utility IPA.071',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_956',
    'Name': 'ST WC IPA.107',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_957',
    'Name': 'Medication IPA.069',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_958',
    'Name': 'Patient Lounge Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_959',
    'Name': 'Pantry',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_960',
    'Name': 'Room IPA.020',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_961',
    'Name': 'Medication & C/U Corridor',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_962',
    'Name': 'Room IPA.011',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_963',
    'Name': 'Switch PLSS.0644',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_964',
    'Name': 'Ante Room IPA.018',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_965',
    'Name': 'Room ISO IPA.016',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_966',
    'Name': 'Ante Room IPA.017',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_967',
    'Name': 'Staircase 4B',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_968',
    'Name': 'Work Room',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_969',
    'Name': 'Staff Base North-West Lower',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_970',
    'Name': 'Corridor to Rooms 11-12 & 14',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_971',
    'Name': 'Equipment Store',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_972',
    'Name': 'D/U Sub',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_973',
    'Name': 'Interview IPA.093',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_974',
    'Name': 'Research Kiosk',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_975',
    'Name': 'Cleaner IPA.090',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_976',
    'Name': 'Staff Overnight MSO.278',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_977',
    'Name': 'Comms PLSS.0647',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_978',
    'Name': 'Electric Riser PLSS.0649',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_979',
    'Name': 'Switch PLSS.0650',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_980',
    'Name': 'ST WC IPA.101',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_981',
    'Name': 'Room IPA.024',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_982',
    'Name': 'Room IPA.025',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_983',
    'Name': 'WC ACC IPA.086',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_984',
    'Name': 'Office IPA.096',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_985',
    'Name': 'Seminar Room IPA.095',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_986',
    'Name': 'Interview IPA.094',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_987',
    'Name': 'Corridor to Rooms 19-20 & 24-25',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_988',
    'Name': 'Staff Property',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_989',
    'Name': 'Workstations South Upper',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_990',
    'Name': 'Staff Lounge',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_991',
    'Name': 'Staff Overnight MSO.279',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_992',
    'Name': 'A/H Drug Store',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_993',
    'Name': 'Switch PLSS.0642',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_994',
    'Name': 'Cleaner POS.195',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_995',
    'Name': 'Workstations South Lower',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_996',
    'Name': 'Staff Property',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_997',
    'Name': 'ST WC POS.228 & 232',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_998',
    'Name': 'File / Stationery',
    'LabelOverride': null,
    'Groups': [
      'All'
    ]
  },
  {
    'Code': 'External_Map_9_Zone_999',
    'Name': 'Riser PLSS.0653',
    'LabelOverride': null,
    'Groups': [
      'SurgicalUnitPerimeter',
      'All'
    ]
  }
];
